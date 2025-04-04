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
import {ChevronDown } from "lucide-react"

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
import { Cons82Variables } from "./cav12-82variables"
import { ScrollArea } from "@/components/ui/scroll-area"

const data: Payment[] = [

          {
    id: "4",
    cantidad: 0,
    cientifico:"Liolaemus leopardinus",
    comun:"Lagartija leopardo",
    ec:"En Peligro de Extinción",
    ob:"Nativo",
        image:"/leopardinus.png",
  },
  {
    id: "1",
    cantidad: 0,
    cientifico:"Liolaemus chiliensis",
    comun:"Lagartija chilena",
    ec:"Preocupación menor",
    ob:"Nativo",
        image:"/lagartija.png",
  },
    {
    id: "2",
    cantidad: 0,
    cientifico:"Liolaemus lemniscatus",
    comun:"Lagartija lemniscata",
    ec:"Preocupación menor",
    ob:"Nativo",
        image:"",
  },
      {
    id: "3",
    cantidad: 0,
    cientifico:"Liolaemus monticola",
    comun:"Lagartija de los montes",
    ec:"Preocupación menor",
    ob:"Endémico",
        image:"",
  },

          {
    id: "5",
    cantidad: 0,
    cientifico:"Liolaemus nitidus ",
    comun:"Lagarto nítido",
    ec:"Casi amenazada",
    ob:"Endémico",
        image:"",
  },
  
]

export type Payment = {
  id: string
  cantidad: number
  cientifico: string
  comun: string
  ec: string
  ob: string
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
    accessorKey: "cientifico",
    header: "Nombre Científico",
    cell: ({ row }) => (
      <div className="capitalize"><i>{row.getValue("cientifico")}</i></div>
    ),
  },
    {
    accessorKey: "comun",
    header: () => <div className="text-right">Nombre Común</div>,
    cell: ({ row }) => {
      return <div className="text-right font-medium">{row.getValue("comun")}</div>
    },
  },
      {
    accessorKey: "ec",
    header: () => <div className="text-right">Estado de Conservación</div>,
    cell: ({ row }) => {
      return <div className="text-right font-medium">{row.getValue("ec")}</div>
    },
  },
      {
    accessorKey: "ob",
    header: () => <div className="text-right">Origen Biogegráfico</div>,
    cell: ({ row }) => {
      return <div className="text-right font-medium">{row.getValue("ob")}</div>
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
          <DialogTitle><i>{payment.cientifico}</i></DialogTitle>
          <DialogDescription>
            <div className="flex flex-col items-center gap-4">
              <img 
                src={payment.image || defaultImage} 
                alt={payment.comun}
                className="rounded-lg max-w-full h-auto max-h-[500px] object-cover"
                onError={(e) => {
                  e.currentTarget.src = defaultImage;
                  e.currentTarget.onerror = null; // Prevent infinite loop
                }}
              />
              <p className="text-lg">{payment.comun}</p>
            </div>
          </DialogDescription>
        </DialogHeader>
        <Cons82Variables></Cons82Variables>
        </ScrollArea>
      </DialogContent>
    </Dialog>
      )

    },
  },

]


export function TablaReptilia () {
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
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
