import { Spinner } from "@material-tailwind/react"

function Loading(){
    return(<>
    <div className="flex flex-col justify-center gap-4 items-center absolute top-0 bottom-0 left-0 right-0">

    <Spinner color="blue" width={'25%'} height={'25%'} />
    <span className="text-blue-500 text-[2rem]">Loading...</span>
    </div>
    </>)
}

export default Loading