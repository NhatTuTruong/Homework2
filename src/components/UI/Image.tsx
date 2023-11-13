
const Image = ({image}: {image: string}) => {
    return (
        <>
            
            <img className="h-auto max-w-lg rounded-lg p-6" src={image} alt="image description"/>

        </>
    )
}

export default Image;