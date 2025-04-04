import { ContactoContent } from "../blocks/contactoPage"
import HeroContacto from "../blocks/heroContacto"


const Contacto = () => {
    return (
        <div className="grid">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <HeroContacto></HeroContacto>
            <ContactoContent></ContactoContent>
         </main>
      </div>
    )
}

export default Contacto