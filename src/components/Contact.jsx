import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="pb-20 border-t border-stone-900">
        <h2 className="my-10 text-4xl text-center">
            Let's Talk
        </h2>
        <div className="tracking-tighter text-center ">
            <p className="my-4">
                {CONTACT.address}
            </p>

            <p className="my-4">
                {CONTACT.phoneNo}
            </p>

            <a href="#" className="border-b ">
                {CONTACT.email}
            </a>
        </div>
    </div>
  )
}
export default Contact