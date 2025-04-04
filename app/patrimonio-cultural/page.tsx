

import { MapArqueologia } from "@/components/ui/mapArqueologia"
import CompromisoPatrimonio from "../blocks/compatrimonio"
import HeroPatrimonio from "../blocks/hero-patrimonio"
import FotosArqueologia from "../blocks/list-arqueologia"
import { Separator } from "@/components/ui/separator"

if (typeof Promise.withResolvers === "undefined") {
    if (typeof window !== 'undefined') {
      // @ts-expect-error This does not exist outside of polyfill which this is doing
      window.Promise.withResolvers = function () {
        let resolve, reject
        const promise = new Promise((res, rej) => {
          resolve = res
          reject = rej
        })
        return { promise, resolve, reject }
      }
    } else {
      // @ts-expect-error This does not exist outside of polyfill which this is doing
      global.Promise.withResolvers = function () {
        let resolve, reject
        const promise = new Promise((res, rej) => {
          resolve = res
          reject = rej
        })
        return { promise, resolve, reject }
      }
    }
  }


const PatrimonioCultural = () => {
    return (
        <div className="grid">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
           <HeroPatrimonio></HeroPatrimonio>
           <CompromisoPatrimonio></CompromisoPatrimonio>
           <MapArqueologia></MapArqueologia>
           <FotosArqueologia></FotosArqueologia>
           <Separator></Separator>
         </main>
      </div>
    )
}

export default PatrimonioCultural