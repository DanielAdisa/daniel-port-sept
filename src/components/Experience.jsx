import { EXPERIENCES } from "../constants"

const Experience = () => {
  return (
    <div className="pb-4">
        <h2 className="my-20 text-4xl text-center">Experience</h2>
        <div>
            {EXPERIENCES.map((experience, index) => (
                <div key={index} className="flex flex-wrap mb-10 lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <p className="items-center mb-4 text-sm text-stone-400 ">
                            {experience.year}
                        </p>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h3 className="mb-2 font-semibold">
                            {experience.role} @{" "}
                            <span className="px-2 py-1 mt-4 mr-2 text-sm font-medium rounded bg-stone-300 text-stone-900">{experience.company}
                            </span>
                        </h3>
                        <p className="mb-4 text-stone-400">
                            {experience.description}
                        </p>
                        {experience.technologies.map((tech, index) => (
                            <span key={index} className="px-2 py-1 mt-4 mr-2 text-sm font-medium rounded bg-stone-900 text-stone-300">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
export default Experience