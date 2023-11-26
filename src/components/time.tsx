import Heading from "./heading";

const TimeCounter = ({ time, label, doted = false }: { time: string, label: string, doted?: boolean }) => {
    return <>
        <div>
            <div className="text-4xl  md:text-6xl font-bold uppercase md:w-[4.5rem]">
                <Heading>
                  
                    {time}
                </Heading>
            </div>
          <div className="relative ">  <div className=" text-center w-full ">{label}</div></div>
        </div>
    </>
}

export default TimeCounter;