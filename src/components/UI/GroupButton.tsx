const GroupButton = ({color}: {color: any}) => {
    const chooseColor = (color:string) => {
        console.log(color);
    }
    return (
        <>
            <div className="inline-flex items-cente p-4">
            <p className="pr-4">Màu: </p>
            {
                color.map((item:any) => (
                    <a href="#"  key={item.name} aria-current="page" onClick={() => chooseColor(item.name)} className="px-4 py-2 mr-2 text-sm font-medium text-blue-700 bg-white border border-gray-200  hover:bg-gray-100 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600  dark:hover:bg-gray-600 dark:focus:ring-blue-500 ">
                        {item.name}
                    </a>
                ))
            }
            </div>
        </>
    )
}


export default GroupButton;