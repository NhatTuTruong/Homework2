import '../../App.css'

const News = ({news}: {news: any}) => {
    return (
        <>
           <div className="description rounded-lg p-6" >
                <p className="mb-2 text-lg  text-gray dark:text-white">Tin tức liên quan</p>
                {
                    news.map((item : any) => (
                        <div className="grid grid-cols-3 gap-6 sm:grid-cols-3 pb-2" key={item.content}>
                            <div className="col-span-1">
                                <img className='rounded-lg' src={item.imageUrl} alt="" />
                            </div>
                            <div className="col-span-2">
                                <p className="text-gray-500 dark:text-gray-400">{item.content}</p>
                                <p className='text-sm text-red_b10000'>{item.view}<span>lượt xem</span></p>
                            </div>
                        </div>
                    ))
                }
           </div>
        </>
    )
}

export default News;