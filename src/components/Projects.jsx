import { PROJECTS } from "../constants"

const Projects = () => {
  return (
    <div className="pb-4 ">
        <h2 className="my-20 text-4xl text-center ">Projects</h2>
        <div>
            {PROJECTS.map((project, index) => (
                <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <img src={project.image} alt={project.title} className="mx-auto mb-6 rounded " width={250} height={250} />
                    </div>
                    <div className="w-full max-w-full lg:w-3/4">
                        <h3 className="mb-2 text-2xl font-semibold">{project.title}</h3>
                        <p className="mb-4 text-stone-400">{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span className="p-2 mr-2 text-sm font-medium rounded bg-stone-900 text-stone-300" key={index}>
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
export default Projects