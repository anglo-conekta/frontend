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
import { ChartCav11 } from "./ff-chartCav11"
import { ScrollArea } from "@/components/ui/scroll-area"

const data: Payment[] = [
  {
    id: "1",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Rosaceae",
    genero:"Acaena",
    especies: "Acaena magellanica",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 316,
    estado: "sin clasificacion",
    image:"/acaenaMagellanica.png",
  },
    {
    id: "2",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Rosaceae",
    genero:"Acaena",
    especies: "Acaena pinnatifida",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 612,
    estado: "sin clasificacion",
    image:"/AcaenaPinnafitida.png",
  },
      {
    id: "3",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Fabaceae",
    genero:"Adesmia",
    especies: "Adesmia capitellata",
    crecimiento:"Hierba anual",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 612,
    estado: "sin clasificacion",
    image:"/adesmiaCapitellata.png",
  },
    {
    id: "4",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Fabaceae",
    genero:"Adesmia",
    especies: "Adesmia glomerula",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 316,
    estado: "sin clasificacion",
        image:"",
  },
      {
    id: "5",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Poaceae",
    genero:"Agrostis",
    especies: "Agrostis sp",
    crecimiento:"Hierba perenne",
    origen:"N/D",
    gob:"N/D",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 316,
    estado: "sin clasificacion",
        image:"",
  },
        {
    id: "6",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Poaceae",
    genero:"Agrostis",
    especies: "Agrostis meyenii Trin",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 216,
    estado: "sin clasificacion",
        image:"",
  },
          {
    id: "7",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Caryophyllaceae",
    genero:"Arenaria",
    especies: "Arenaria serpens",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 253,
    estado: "sin clasificacion",
        image:"",
  },
          {
    id: "8",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Plumbaginaceae",
    genero:"Armeria",
    especies: "Armeria maritima",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 116,
    estado: "sin clasificacion",
        image:"",
  },
            {
    id: "9",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Apiaceae",
    genero:"Azorella",
    especies: "Azorella madreporica",
    crecimiento:"Subarbusto",
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
    division: "Pteridophyta",
    clase:"Polypodiopsida",
    familia:"Biechnaceae",
    genero:"Biechnum",
    especies: "Blechnum microphyllum",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 292,
    estado: "sin clasificacion",
        image:"",
  },
                {
    id: "11",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Portulacaceae",
    genero:"Calandrinia",
    especies: "Calandrinia affinis",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },
         {
    id: "12",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Portulacaceae",
    genero:"Calendrinia",
    especies: "Calendrinia caespitosa",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },
           {
    id: "13",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Calceolariaceae",
    genero:"Calceolaria",
    especies: "Calceolaria filicaulis",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },
             {
    id: "14",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Calllitrichaceae",
    genero:"Callitriche",
    especies: "Callitriche sp",
    crecimiento:"Hierba anual",
    origen:"N/D",
    gob:"N/D",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },
               {
    id: "15",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Cyperaceae",
    genero:"Carex",
    especies: "Carex atropicta",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },
                 {
    id: "16",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Cyperaceae",
    genero:"Carex",
    especies: "Carex chilanensis",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },
                   {
    id: "17",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Cyperaceae",
    genero:"Carex",
    especies: "Carex gayana",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },
                     {
    id: "18",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Cyperaceae",
    genero:"Carex",
    especies: "Carex macloviana",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },
                       {
    id: "19",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Cyperaceae",
    genero:"Carex",
    especies: "Carex malmei",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },
                         {
    id: "20",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Cyperaceae",
    genero:"Carex",
    especies: "Carex maritima",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },
                           {
    id: "21",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Cyperaceae",
    genero:"Carex",
    especies: "Carex microglochin",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },
                             {
    id: "22",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Cyperaceae",
    genero:"Carex",
    especies: "Carex sp",
    crecimiento:"Hierba perenne",
    origen:"N/D",
    gob:"N/D",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },
                             {
    id: "23",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Cyperaceae",
    genero:"Carex",
    especies: "Carex vallis-pulchrae",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },
                         {
    id: "24",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Caryphyllaceae",
    genero:"Cerastium",
    especies: "Cerastium arvense",
    crecimiento:"Hierba perenne",
    origen:"Introducida",
    gob:"N/A",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 282,
    estado: "sin clasificacion",
        image:"",
  },

                           {
    id: "25",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Caryphyllaceae",
    genero:"Cerastium",
    especies: "Cerastium humifusum",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 282,
    estado: "sin clasificacion",
        image:"",
  },
                           {
    id: "26",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Caryphyllaceae",
    genero:"Colobanthus",
    especies: "Colobanthus lycopodioides",
    crecimiento:"Subarbusto",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 282,
    estado: "sin clasificacion",
        image:"",
  },
                            {
    id: "27",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Caryphyllaceae",
    genero:"Colobanthus",
    especies: "Colobanthus quitensis",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 282,
    estado: "sin clasificacion",
        image:"",
  },

                              {
    id: "28",
    division: "Pteridophyta",
    clase:"Polypodiopsida",
    familia:"Woodsiaceae",
    genero:"Cystopteris",
    especies: "Cystopteris fragilis",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"LC",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 282,
    estado: "sin clasificacion",
        image:"",
  },
       
                               {
    id: "29",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Poaceae",
    genero:"Deschampsia",
    especies: "Deschampsia caespitosa",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 172,
    estado: "sin clasificacion",
        image:"",
  },
                                 {
    id: "30",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Poaceae",
    genero:"Deyeuxia",
    especies: "Deyeuxia chrysostachya",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 172,
    estado: "sin clasificacion",
        image:"",
  },

                                   {
    id: "31",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Poaceae",
    genero:"Deyeuxia",
    especies: "Deyeuxia erythostchya",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 172,
    estado: "sin clasificacion",
        image:"",
  },
                                     {
    id: "32",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Poaceae",
    genero:"Deyeuxia",
    especies: "Deyeuxia velutina",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 172,
    estado: "sin clasificacion",
        image:"",
  },
                                 {
    id: "33",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Brassicaceae",
    genero:"Draba",
    especies: "Draba gilliesii",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 172,
    estado: "sin clasificacion",
        image:"",
  },
                                   {
    id: "34",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Brassicaceae",
    genero:"Draba",
    especies: "Draba pusilla",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },
                                   {
    id: "35",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Cyperaceae",
    genero:"Eleocharis",
    especies: "Eleocharis melanomphala",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 72,
    estado: "sin clasificacion",
        image:"",
  },
                                     {
    id: "36",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Cyperaceae",
    genero:"Eleocharis",
    especies: "Eleocharis pseudoalbibracteata",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 172,
    estado: "sin clasificacion",
        image:"",
  },
                                       {
    id: "37",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Empetraceae",
    genero:"Empetrum",
    especies: "Empetrum rubrum",
    crecimiento:"Subarbusto",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 92,
    estado: "sin clasificacion",
        image:"",
  },
                                       {
    id: "38",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Onagraceae",
    genero:"Epilobium",
    especies: "Epilobium glaucum",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },

                                         {
    id: "39",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Onagraceae",
    genero:"Epilobium",
    especies: "Epilobium nivale",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },
                                              {
    id: "40",
    division: "Magnoliophyta",
    clase:"Magnolliopsida",
    familia:"Asteraceae",
    genero:"Erigeron",
    especies: "Erigeron andicola",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 142,
    estado: "sin clasificacion",
        image:"",
  },

                                                {
    id: "41",
    division: "Magnoliophyta",
    clase:"Magnolliopsida",
    familia:"Asteraceae",
    genero:"Erigeron",
    especies: "Erigeron gilliesii",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 123,
    estado: "sin clasificacion",
        image:"",
  },
                                                  {
    id: "42",
    division: "Magnoliophyta",
    clase:"Magnolliopsida",
    familia:"Asteraceae",
    genero:"Erigeron",
    especies: "Erigeron leptopetalus",
    crecimiento:"Subarbusto",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 93,
    estado: "sin clasificacion",
        image:"",
  },
                                                {
    id: "43",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Poaceae",
    genero:"Festuca",
    especies: "Festuca magellanica",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 112,
    estado: "sin clasificacion",
        image:"",
  },
                                                    {
    id: "44",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Asteraceae",
    genero:"Gamochaeta",
    especies: "Gamochaeta andina",
    crecimiento:"Hierba perenne",
    origen:"Endémica",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 112,
    estado: "sin clasificacion",
        image:"",
  },
                                                        {
    id: "45",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Ericaceae",
    genero:"Gaultheria",
    especies: "Gaultheria caespitosa",
    crecimiento:"Subarbusto",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 261,
    estado: "sin clasificacion",
        image:"",
  },
                                                          {
    id: "46",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Ericaceae",
    genero:"Gaultheria",
    especies: "Gaultheria pumila",
    crecimiento:"Arbusto",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 261,
    estado: "sin clasificacion",
        image:"",
  },
                                                           {
    id: "47",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Ericaceae",
    genero:"Gaultheria",
    especies: "Gaultheria sp",
    crecimiento:"Arbusto",
    origen:"N/D",
    gob:"N/D",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 261,
    estado: "sin clasificacion",
        image:"",
  },
                                                              {
    id: "48",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Gentianacae",
    genero:"Gentiana",
    especies: "Gentiana prostrata",
    crecimiento:"Hierba anual",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 132,
    estado: "sin clasificacion",
        image:"",
  },
                                                                {
    id: "49",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Poaceae",
    genero:"Hordeum",
    especies: "Hordeum comosum",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 132,
    estado: "sin clasificacion",
        image:"",
  },

                                                                  {
    id: "50",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Poaceae",
    genero:"Hordeum",
    especies: "Hordeum pubiflorum",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 132,
    estado: "sin clasificacion",
        image:"",
  },

                                                                  {
    id: "51",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Asteraceae",
    genero:"Hyphochaers",
    especies: "Hypochaeris acaulis",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 132,
    estado: "sin clasificacion",
        image:"",
  },
                                                                    {
    id: "52",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Juncaceae",
    genero:"Juncus",
    especies: "Juncus stipulatus",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 152,
    estado: "sin clasificacion",
        image:"",
  },

                                                                      {
    id: "53",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Apiaceae",
    genero:"Laretia",
    especies: "Laretia acaulis",
    crecimiento:"Arbusto",
    origen:"Nativa",
    gob:"LC",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 122,
    estado: "sin clasificacion",
        image:"",
  },
                                                                        {
    id: "54",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Asteraceae",
    genero:"Leucheria",
    especies: "Leucheria runcinata",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 122,
    estado: "sin clasificacion",
        image:"",
  },

                                                                          {
    id: "55",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Asteraceae",
    genero:"Leucheria",
    especies: "Leucheria scobriculata",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 122,
    estado: "sin clasificacion",
        image:"",
  },

                                                                            {
    id: "56",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Campanulaceae",
    genero:"Lobelia",
    especies: "Lobelia oligphylla",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 222,
    estado: "sin clasificacion",
        image:"",
  },
                                                                              {
    id: "57",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Juncaceae",
    genero:"Luzula",
    especies: "Luzula chilensis",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 82,
    estado: "sin clasificacion",
        image:"",
  },
                                                                              {
    id: "58",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Portulacaceae",
    genero:"Montiopsis",
    especies: "Montiopsis sp",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 222,
    estado: "sin clasificacion",
        image:"",
  },
                                                                                {
    id: "59",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Asteraceae",
    genero:"Nassauvia",
    especies: "Nassauvia cumingii",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 222,
    estado: "sin clasificacion",
        image:"",
  },

                                                                                  {
    id: "60",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"brassicaceae",
    genero:"Noccaea",
    especies: "Noccaea magellanica",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 222,
    estado: "sin clasificacion",
        image:"",
  },
                                                                              {
    id: "61",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Juncaceae",
    genero:"Patosia",
    especies: "Patosia clandestina",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 92,
    estado: "sin clasificacion",
        image:"",
  },
                                                                                {
    id: "62",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Poaceae",
    genero:"Phleum",
    especies: "Phleum alpinum",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 92,
    estado: "sin clasificacion",
        image:"",
  },
                                                                                  {
    id: "63",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Cyperaceae",
    genero:"Phylloscirpus",
    especies: "Phylloscirpus acaulis",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 92,
    estado: "sin clasificacion",
        image:"",
  },
                                                                                  {
    id: "64",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Plantaginaceae",
    genero:"Plantago",
    especies: "Plantago barbata",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 92,
    estado: "sin clasificacion",
        image:"",
  },
                                                                                    {
    id: "65",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Poaceae",
    genero:"Poa",
    especies: "Poa acinaciphylla",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 92,
    estado: "sin clasificacion",
        image:"",
  },
                                                                                      {
    id: "66",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Poaceae",
    genero:"Poa",
    especies: "Poa pratensis",
    crecimiento:"Hierba perenne",
    origen:"Introducida",
    gob:"N/A",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 92,
    estado: "sin clasificacion",
        image:"",
  },
                                                                                        {
    id: "68",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Poaceae",
    genero:"Poa",
    especies: "Poa sp",
    crecimiento:"Hierba perenne",
    origen:"N/D",
    gob:"N/D",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 92,
    estado: "sin clasificacion",
        image:"",
  },
                                                                                  {
    id: "68",
    division: "Pteridophyta",
    clase:"Polypodiopsida",
    familia:"Dryopteridaceae",
    genero:"Polystichum",
    especies: "Polystichum andinum",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 92,
    estado: "sin clasificacion",
        image:"",
  },
                                                                                  {
    id: "69",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Grossulariaceae",
    genero:"Ribes",
    especies: "Ribes cucullatum",
    crecimiento:"Arbusto",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 92,
    estado: "sin clasificacion",
        image:"",
  },

                                                                                          {
    id: "70",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Iradaceae",
    genero:"Solenomelus",
    especies: "Solenomelus segethii",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 92,
    estado: "sin clasificacion",
        image:"",
  },

                                                                                            {
    id: "71",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Caryophyllaceae",
    genero:"Stellaria",
    especies: "Stellaria debilis",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 92,
    estado: "sin clasificacion",
        image:"",
  },

                                                                                            {
    id: "72",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Potamogetonaceae",
    genero:"Stuckenia",
    especies: "Stuckenia filiformis",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 92,
    estado: "sin clasificacion",
        image:"",
  },

                                                                                              {
    id: "73",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Asteraceae",
    genero:"Taraxacum",
    especies: "Taraxacum officinale",
    crecimiento:"Hierba perenne",
    origen:"Introducida",
    gob:"N/A",
    ds68:"--",
    sistema:"Ecotono",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },
                                                                                              {
    id: "74",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Fabaceae",
    genero:"Trifolium",
    especies: "Trifolium repens",
    crecimiento:"Hierba perenne",
    origen:"Introducida",
    gob:"N/A",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },
                                                                                              {
    id: "75",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Poaceae",
    genero:"Trisetum",
    especies: "Trisetum spicatum",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 92,
    estado: "sin clasificacion",
        image:"",
  },

                                                                                              {
    id: "76",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Plantaginaceae",
    genero:"Veronica",
    especies: "Veronica peregrina",
    crecimiento:"Hierba anual",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },

                                                                                                {
    id: "77",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Brassicaceae",
    genero:"Weberbauera",
    especies: "Weberbauera colchaguensis",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },
                                                                                                {
    id: "78",
    division: "Magnoliophyta",
    clase:"Magnoliopsida",
    familia:"Asteraceae",
    genero:"Wemeria",
    especies: "Wemeria pygmaea",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
    cantidad: 192,
    estado: "sin clasificacion",
        image:"",
  },
                                                                                                {
    id: "79",
    division: "Magnoliophyta",
    clase:"Liliopsida",
    familia:"Cyperaceae",
    genero:"Zemeiosirpus",
    especies: "Zemeioscirpus gaimardioides",
    crecimiento:"Hierba perenne",
    origen:"Nativa",
    gob:"--",
    ds68:"--",
    sistema:"Azonal",
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
    cell: ({ row }) => <div className=""><i>{row.getValue("especies")}</i></div>,
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
        <ChartCav11></ChartCav11>
        </ScrollArea>
      </DialogContent>
    </Dialog>
      )

    },
  },

]


export function TablaCav11 () {
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
