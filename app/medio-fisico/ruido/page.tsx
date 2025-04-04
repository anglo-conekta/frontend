import CompromisoRuido from "@/app/blocks/compruido"
import HeroRuido from "@/app/blocks/heroruido"
import { G2106 } from "@/app/blocks/ruido-G2106"
import { G2107 } from "@/app/blocks/ruidoG2107"
import { MapRuido } from "@/components/ui/mapRuido"

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
  
const Ruido = () => {
    return (
        <div className="grid">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
           <HeroRuido></HeroRuido>
           <CompromisoRuido></CompromisoRuido>
           <MapRuido></MapRuido>
           <G2106></G2106>
           <G2107></G2107>
         </main>
      </div>
    )
}

export default Ruido