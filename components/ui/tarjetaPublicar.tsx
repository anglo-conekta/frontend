"use client"
import { BellRing, Check } from "lucide-react"
import React, { useState, useEffect, useCallback } from 'react';

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import dynamic from "next/dynamic"
import { Label } from "./label"
import { Textarea } from "./textarea"

async function getUltimaPublica() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337";
  const path = `/api/dboard-public`;
  const url = new URL(path, baseUrl);
  const res = await fetch(url, { cache: 'no-store' });
  if (!res.ok) throw new Error("Failed to fetch notifications");
  const data = await res.json();
  return {
    fechaultima: {
      fult: data.data.fecha_ult,
      fult_dat: data.data.fecha_ult_data,
    },
  };
}

const AlertDialog = dynamic(() => import('@/components/ui/alert-dialog').then((mod) => mod.AlertDialog), { ssr: false });

type Notification = {
  title: string;
  description: string;
};

type CardProps = React.ComponentProps<typeof Card>

export function CardDemo({ className, ...props }: CardProps) {
  const [apiNotifications, setApiNotifications] = useState<Notification[]>([]);
  const [fechaultima, setFechaultima] = useState<{ fechaultima: { fult: string; fult_dat: any } } | null>(null);
  const [diasPendientes, setDiasPendientes] = useState<number | null>(null);
  const [isPublishing, setIsPublishing] = useState(false); // Estado para indicar si se está publicando

  const loadNotifications = useCallback(async () => {
    try {
      const dataFromApi = await getUltimaPublica();
      if (dataFromApi?.fechaultima) {
        const formattedNotifications = [
          {
            title: "Fecha última publicación",
            description: dataFromApi.fechaultima.fult,
          },
          {
            title: "Último dato recibido",
            description: dataFromApi.fechaultima.fult_dat,
          },
        ];
        setApiNotifications(formattedNotifications);
        setFechaultima(dataFromApi); // Actualizar el estado de fechaultima también
      }
    } catch (error) {
      console.error("Error al cargar las notificaciones:", error);
    }
  }, []);

  useEffect(() => {
    loadNotifications();
  }, [loadNotifications]);

  useEffect(() => {
    async function calculadiff() {
      try {
        if (fechaultima?.fechaultima?.fult) {
          const fechaPublicacion = new Date(fechaultima.fechaultima.fult);
          const hoy = new Date();
          const diferenciaEnMilisegundos = hoy.getTime() - fechaPublicacion.getTime();
          const milisegundosEnUnDia = 1000 * 60 * 60 * 24;
          const dias = Math.floor(diferenciaEnMilisegundos / milisegundosEnUnDia);
          setDiasPendientes(dias);
        }
      } catch (error) {
        console.error("Error al cargar las diferencias de fechas:", error);
      }
    }
    calculadiff();
  }, [fechaultima]); // Se ejecuta cada vez que fechaultima cambia

  const handlePublicarClick = async () => {
    setIsPublishing(true);
    console.log('Se presionó Publicar');
    const respuestaguardar = {"data": {"fecha_ult": new Date().toISOString().split('T')[0]}};
    const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:1337";
    const path = `/api/dboard-public`;
    const url = new URL(path, baseUrl);

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(respuestaguardar),
      });

      if (response.ok) {
        console.log('Respuesta guardada exitosamente');
        // Recargar las notificaciones después de publicar
        await loadNotifications();
      } else {
        console.error('Error al guardar la respuesta:', response.status);
        // Maneja el error
      }
    } catch (error) {
      console.error('Error de red:', error);
    } finally {
      setIsPublishing(false); // Asegurarse de que el estado de publicación se restablezca
    }
  };

  return (
    <Card className={cn("w-[380px]", "whitebg", className)} {...props}>
      <CardHeader>
        <CardTitle>Publicar</CardTitle>
        <CardDescription>
          Hay {diasPendientes !== null ? diasPendientes : 'Cargando...'} días de datos pendientes de publicar
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div>
          {apiNotifications.map((notification, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {notification.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {notification.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Rechazar y Notificar
            </p>
            <p className="text-sm text-muted-foreground">
              Activar en caso de que los datos no sean correctos
            </p>
          </div>

          <AlertDialog>
            <AlertDialogTrigger><Button variant="outline" className="w-full">
              Rechazar
            </Button></AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>¿Está seguro?</AlertDialogTitle>
                <AlertDialogDescription>
                  <p>Al rechazar los datos, se envía una notificación al emisor para proceder con las acciones definidas.</p>
                  <Label htmlFor="message-2">Escriba el motivo del rechazo</Label>
                  <Textarea placeholder="Incluya la mayor cantidad de detalles posible" id="message-2" />
                  <p className="text-sm text-muted-foreground">
                    Este detalle será enviado al equipo de soporte para su revisión.
                  </p>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancelar</AlertDialogCancel>
                <AlertDialogAction>Rechazar</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </CardContent>

      <CardFooter>
        <AlertDialog>
          <AlertDialogTrigger><Button className="w-full" disabled={isPublishing}>
            <Check /> {isPublishing ? 'Publicando...' : 'Publicar'}
          </Button></AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>¿Está seguro?</AlertDialogTitle>
              <AlertDialogDescription>
                Al publicar los datos, estos serán visibles para público en general en el portal web.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handlePublicarClick}>Publicar</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
}
