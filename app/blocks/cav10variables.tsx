"use client"

 
import {
  Dialog,

  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChartCav10 } from "./ff-chart10"
import { ScrollArea } from "@/components/ui/scroll-area"

const data: Payment[] = [
  {
    id: "1",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Rosaceae",
    genero:"Acaena",
    especies: "Acaena pinnafitida",
    crecimiento:"Herbáceo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 316,
    estado: "sin clasificacion",
    image:"/AcaenaPinnafitida.png",
  },
    {
    id: "2",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Rosaceae",
    genero:"Acaena",
    especies: "Acaena poeppigiana",
    crecimiento:"Herbáceo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 612,
    estado: "sin clasificacion",
    image:"/AcaenaPoeppigiana.png",
  },
      {
    id: "3",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Plumbaginaceae",
    genero:"Armeria",
    especies: "Armeria maritima",
    crecimiento:"Herbáceo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 612,
    estado: "sin clasificacion",
    image:"/ArmeriaMaritima.png",
  },
    {
    id: "4",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Apiaceae",
    genero:"Azorella",
    especies: "Azorella madreporica",
    crecimiento:"Hierba o subarbusto",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 316,
    estado: "sin clasificacion",
    image:"",
  },
      {
    id: "5",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Berberidaceae",
    genero:"Berberis",
    especies: "Berberis empetrifolia",
    crecimiento:"Subarbusto",
    origen:"Nativa",
    gob:"--",
    ds68:"X",
    sistema:"Zonal",
    cantidad: 316,
    estado: "sin clasificacion",
   image:"",
  },
        {
    id: "6",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Apiaceae",
    genero:"Bowlesia",
    especies: "Bowlesia tropaolifolia",
    crecimiento:"Herbáceo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 216,
    estado: "sin clasificacion",
        image:"",
  },
          {
    id: "7",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Poaceae",
    genero:"Bromus",
    especies: "Bromus setifolius",
    crecimiento:"Herbáceo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 253,
    estado: "sin clasificacion",
        image:"",
  },
          {
    id: "8",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Loasaceae",
    genero:"Caiophora",
    especies: "Caiophora coronata",
    crecimiento:"Herbáceo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 116,
    estado: "sin clasificacion",
        image:"",
  },
            {
    id: "9",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Portulacaceae",
    genero:"Calandrinia",
    especies: "Calandrinia caespitosa",
    crecimiento:"Herbáceo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 96,
    estado: "sin clasificacion",
        image:"",
  },
              {
    id: "10",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Calceolariaceae",
    genero:"Calceolaria",
    especies: "Calceolaria corymbosa ssp mimuloides",
    crecimiento:"Herbáceo",
    origen:"Endémica",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 292,
    estado: "sin clasificacion",
        image:"",
  },
                {
    id: "11",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Onagraceae",
    genero:"Camissonia",
    especies: "Camissonia dentata",
    crecimiento:"Herbáceo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },
         {
    id: "12",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Cuéraceae",
    genero:"Carex",
    especies: "Carex andina",
    crecimiento:"Herbáceo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },
           {
    id: "16",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Caryophyullaceae",
    genero:"Cerastium",
    especies: "Cerastium arvense",
    crecimiento:"Herbáceo",
    origen:"Introducida",
    gob:"--",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 292,
    estado: "sin clasificacion",
        image:"",
  },

             {
    id: "17",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Portulacaceae",
    genero:"Cistanthe",
    especies: "Cistanthe frigida",
    crecimiento:"Herbáceo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 212,
    estado: "sin clasificacion",
        image:"",
  },
               {
    id: "18",
    division: "Pteridophyta",
    clase:"Filicopsida",
    familia:"Woodsiaceae",
    genero:"Cystopteris",
    especies: "Cystopteris fragilis",
    crecimiento:"Herbáceo",
    origen:"Nativa",
    gob:"EN(JF), LC(DS 19/2012 MMA)",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 32,
    estado: "sin clasificacion",
        image:"",
  },
                 {
    id: "19",
    division: "Magnoliphyta",
    clase:"Liliopsida",
    familia:"Poaceae",
    genero:"Deyeuxia",
    especies: "Deyeuxia chrysantha",
    crecimiento:"Herbáceo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 32,
    estado: "sin clasificacion",
        image:"",
  },
                   {
    id: "21",
    division: "Magnoliphyta",
    clase:"Magnoliopsida",
    familia:"Apocynaceae",
    genero:"Diplolepis",
    especies: "Diplolepis nummulariifolia",
    crecimiento:"Subarbusto",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 82,
    estado: "sin clasificacion",
        image:"",
  },
                     {
    id: "22",
    division: "Magnoliphyta",
    clase:"Magnoliopsida",
    familia:"Brassicaceae",
    genero:"Draba",
    especies: "Draba gilliesii",
    crecimiento:"Herbáceo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 182,
    estado: "sin clasificacion",
        image:"",
  },
                       {
    id: "23",
    division: "Pinophyta",
    clase:"Gnetopsida",
    familia:"Ephedraceae",
    genero:"Ephedra",
    especies: "Ephedra chilensis",
    crecimiento:"Arbustivo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 182,
    estado: "sin clasificacion",
        image:"",
  },
                         {
    id: "24",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Asteraceae",
    genero:"Erigeon",
    especies: "Erigeon andicola",
    crecimiento:"Herbáceo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 282,
    estado: "sin clasificacion",
        image:"",
  },
                           {
    id: "26",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Rubiaceae",
    genero:"Galium",
    especies: "Galium suffruticosum",
    crecimiento:"Subarbusto",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 282,
    estado: "sin clasificacion",
        image:"",
  },
                             {
    id: "27",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Rubiaceae",
    genero:"Galium",
    especies: "Galium gilliesii",
    crecimiento:"Subarbusto",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 172,
    estado: "sin clasificacion",
        image:"",
  },
                               {
    id: "29",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Ericaceae",
    genero:"Gaultheria",
    especies: "Gaultheria pumila",
    crecimiento:"Arbustivo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 172,
    estado: "sin clasificacion",
        image:"",
  },
                                 {
    id: "30",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Asteraceae",
    genero:"Haplopappus",
    especies: "Haplopappus scrobiculatus",
    crecimiento:"Arbustivo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 172,
    estado: "sin clasificacion",
        image:"",
  },
                                   {
    id: "31",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Poaceae",
    genero:"Hordeum",
    especies: "Hordeum comosum",
    crecimiento:"Herbáceo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 72,
    estado: "sin clasificacion",
        image:"",
  },
                                     {
    id: "33",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Poaceae",
    genero:"Hordeum",
    especies: "Hordeum sp",
    crecimiento:"N/D",
    origen:"N/D",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 72,
    estado: "sin clasificacion",
        image:"",
  },
                                       {
    id: "34",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Apiaceae",
    genero:"Laretia",
    especies: "Laretia acaulis",
    crecimiento:"Arbustivo",
    origen:"Nativa",
    gob:"LC DD(VIII) (DS 42/2011 MMA)/VU (Benoit/1989)",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 92,
    estado: "sin clasificacion",
        image:"",
  },
                                       {
    id: "35",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Asteraceae",
    genero:"Leucheria",
    especies: "Leucheria cf runcinata",
    crecimiento:"Herbáceo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },
                                         {
    id: "36",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Loasaceae",
    genero:"Loasa",
    especies: "Loasa sigmoidea",
    crecimiento:"Herbáceo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },

                                           {
    id: "37",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Juncaceae",
    genero:"Luzula",
    especies: "Luzula chilensis",
    crecimiento:"Herbáceo",
    origen:"Endémica",
    gob:"--",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },
                                             {
    id: "38",
    division: "Magnoliophyta",
    clase:"Magnolliopsida",
    familia:"Portulacaceae",
    genero:"Montiopsis",
    especies: "Montiopsis potentilloides",
    crecimiento:"Herbáceo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 130,
    estado: "sin clasificacion",
        image:"",
  },
                                              {
    id: "40",
    division: "Magnoliophyta",
    clase:"Magnolliopsida",
    familia:"Asteraceae",
    genero:"Nassauvia",
    especies: "Nassauvia lagascae",
    crecimiento:"Herbáceo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 142,
    estado: "sin clasificacion",
        image:"",
  },
                                                {
    id: "41",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Poaceae",
    genero:"Nassella",
    especies: "Nassella chilensis",
    crecimiento:"Herbáceo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 112,
    estado: "sin clasificacion",
        image:"",
  },
                                                  {
    id: "42",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Calyceraceae",
    genero:"Nastanthus",
    especies: "Nasthantos scapigerus",
    crecimiento:"Herbáceo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 82,
    estado: "sin clasificacion",
        image:"",
  },
                                                    {
    id: "43",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Calyceraceae",
    genero:"Nastanthus",
    especies: "Nasthantos ventosus",
    crecimiento:"Herbáceo",
    origen:"Endémica",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 112,
    estado: "sin clasificacion",
        image:"",
  },
                                                      {
    id: "44",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Iridaceae",
    genero:"Olsynium",
    especies: "Olsynium sp",
    crecimiento:"N/D",
    origen:"N/D",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 26,
    estado: "sin clasificacion",
        image:"",
  },
                                                        {
    id: "45",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Poaceae",
    genero:"Pappostipa",
    especies: "Pappostipa chrysopylla",
    crecimiento:"Herbáceo",
    origen:"Endémica",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 261,
    estado: "sin clasificacion",
        image:"",
  },
                                                          {
    id: "46",
    division: "Magnoliophyta",
    clase:"Asteraceae",
    familia:"Perezia",
    genero:"Perezia pilifera",
    especies: "Pappostipa chrysopylla",
    crecimiento:"Herbáceo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 161,
    estado: "sin clasificacion",
        image:"",
  },
                                                            {
    id: "47",
    division: "Magnoliophyta",
    clase:"Asteraceae",
    familia:"Perezia",
    genero:"Perezia poeppigii",
    especies: "Pappostipa chrysopylla",
    crecimiento:"Herbáceo",
    origen:"Endémica",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 132,
    estado: "sin clasificacion",
        image:"",
  },
                                                              {
    id: "48",
    division: "Magnoliophyta",
    clase:"Boraginaceae",
    familia:"Phacelia",
    genero:"Phacelia cumingii",
    especies: "Pappostipa chrysopylla",
    crecimiento:"Herbáceo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 132,
    estado: "sin clasificacion",
        image:"",
  },
                                                                {
    id: "49",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Boraginaceae",
    genero:"Phacelia",
    especies: "Phacelia secunda",
    crecimiento:"Hierba o subarbusto",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 132,
    estado: "sin clasificacion",
        image:"",
  },
                                                                  {
    id: "50",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Plantaginaceae",
    genero:"Plantago",
    especies: "Plantago barbata",
    crecimiento:"Herbáceo",
    origen:"Ecotono",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 132,
    estado: "sin clasificacion",
        image:"",
  },
                                                                    {
    id: "52",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Grossulariaceae",
    genero:"Ribes",
    especies: "Ribes cucullatum",
    crecimiento:"Arbustivo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 152,
    estado: "sin clasificacion",
        image:"",
  },

                                                                      {
    id: "53",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Polygonaceae",
    genero:"Rumex",
    especies: "Rumex acetosella",
    crecimiento:"Herbáceo",
    origen:"Introducida",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 122,
    estado: "sin clasificacion",
        image:"",
  },
                                                                        {
    id: "54",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Polygonaceae",
    genero:"Rumex",
    especies: "Rumex acetosella",
    crecimiento:"Herbáceo",
    origen:"Introducida",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 122,
    estado: "sin clasificacion",
        image:"",
  },

                                                                          {
    id: "55",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Astaraceae",
    genero:"Senecio",
    especies: "Senecio crithmoides",
    crecimiento:"Subarbusto",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 222,
    estado: "sin clasificacion",
        image:"",
  },
                                                                            {
    id: "56",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Astaraceae",
    genero:"Senecio",
    especies: "Senecio sp",
    crecimiento:"N/D",
    origen:"N/D",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 222,
    estado: "sin clasificacion",
        image:"",
  },
                                                                              {
    id: "57",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Astaraceae",
    genero:"Senecio",
    especies: "Senecio lithostaurus",
    crecimiento:"Subarbusto",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 82,
    estado: "sin clasificacion",
        image:"",
  },
                                                                              {
    id: "58",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Astaraceae",
    genero:"Taraxacum",
    especies: "Taraxacum officinale",
    crecimiento:"Herbáceo",
    origen:"Introducida",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 222,
    estado: "sin clasificacion",
        image:"",
  },

                                                                              {
    id: "60",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Poaceae",
    genero:"Trisetum",
    especies: "Trisetum preslei",
    crecimiento:"Herbáceo",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 92,
    estado: "sin clasificacion",
        image:"",
  },
                                                                                {
    id: "61",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Poaceae",
    genero:"Trisetum",
    especies: "Trisetum sp",
    crecimiento:"N/D",
    origen:"N/D",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 92,
    estado: "sin clasificacion",
        image:"",
  },
                                                                                  {
    id: "62",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Loranthaceae",
    genero:"Tristerix",
    especies: "Tristerix sp",
    crecimiento:"N/D",
    origen:"N/D",
    gob:"--",
    ds68:"--",
    sistema:"Zonal",
    cantidad: 92,
    estado: "sin clasificacion",
        image:"",
  },
]

export type Payment = {
  id: string
  cantidad: number
  estado: "sin clasificacion" | "amenazada" | "bajo riesgo" | "otro estado"
  especies: string
  division: string
  clase: string
  familia: string
  genero: string
  crecimiento: string
  origen: string
  gob: string
  ds68:string
  sistema: string
  image: string
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Seleccionar todo"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Seleccionar fila"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "estado",
    header: "Estado",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("estado")}</div>
    ),
  },
    {
    accessorKey: "division",
    header: () => <div className="text-right">División</div>,
    cell: ({ row }) => {
      return <div className="text-right font-medium">{row.getValue("division")}</div>
    },
  },
      {
    accessorKey: "clase",
    header: () => <div className="text-right">Clase</div>,
    cell: ({ row }) => {
      return <div className="text-right font-medium">{row.getValue("clase")}</div>
    },
  },
      {
    accessorKey: "familia",
    header: () => <div className="text-right">Familia</div>,
    cell: ({ row }) => {
      return <div className="text-right font-medium">{row.getValue("familia")}</div>
    },
  },
      {
    accessorKey: "genero",
    header: () => <div className="text-right">Género</div>,
    cell: ({ row }) => {
      return <div className="text-right font-medium">{row.getValue("genero")}</div>
    },
  },
    {
    accessorKey: "especies",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Especie
          <ArrowUpDown />
        </Button>
      )
    },
    cell: ({ row }) => <div className="">{row.getValue("especies")}</div>,
  },
      {
    accessorKey: "crecimiento",
    header: () => <div className="text-right">Hábito de crecimiento</div>,
    cell: ({ row }) => {
      return <div className="text-right font-medium">{row.getValue("crecimiento")}</div>
    },
  },
      {
    accessorKey: "origen",
    header: () => <div className="text-right">Origen fitogeográfico</div>,
    cell: ({ row }) => {
      return <div className="text-right font-medium">{row.getValue("origen")}</div>
    },
  },
      {
    accessorKey: "gob",
    header: () => <div className="text-right">MMA (RCE) y MIN SEGPRES</div>,
    cell: ({ row }) => {
      return <div className="text-right font-medium">{row.getValue("gob")}</div>
    },
  },
      {
    accessorKey: "ds68",
    header: () => <div className="text-right">DS. 68</div>,
    cell: ({ row }) => {
      return <div className="text-right font-medium">{row.getValue("ds68")}</div>
    },
  },
      {
    accessorKey: "sistema",
    header: () => <div className="text-right">Sistema</div>,
    cell: ({ row }) => {
      return <div className="text-right font-medium">{row.getValue("sistema")}</div>
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const payment = row.original
        const defaultImage = "/placeholder.png"

      return (
    <Dialog>
      <DialogTrigger>Ver</DialogTrigger>
      <DialogContent className="whitebg container mx-auto max-w-6xl">
<ScrollArea className="h-[450px] rounded-md border p-4">
        <DialogHeader>
          <DialogTitle><i>{payment.especies}</i></DialogTitle>
          <DialogDescription>
            <div className="flex flex-col items-center gap-4">
              <img 
                src={payment.image || defaultImage} 
                alt={payment.especies}
                className="rounded-lg max-w-full h-auto max-h-[500px] object-cover"
                onError={(e) => {
                  e.currentTarget.src = defaultImage;
                  e.currentTarget.onerror = null; // Prevent infinite loop
                }}
              />
              <p className="text-lg"><i>{payment.especies}</i></p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <ChartCav10></ChartCav10>
        </ScrollArea>
      </DialogContent>
    </Dialog>
      )

    },
  },

]


export function VariablesCav10 () {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  return (
    <div className="container mx-auto">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filtrar especies"
          value={(table.getColumn("especies")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("especies")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columnas <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      <i>{flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}</i>
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
