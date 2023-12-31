import { useState } from 'react'
import '../../App.css'
const parameter =
    [
        {
            name : 'Hệ điều hành:',
            value: 'Android 11',
        },
        {
            name : 'Camera sau:',
            value: 'Chính 12 MP & Phụ 64 MP, 12 MP',
        },
        {
            name : 'camera trước:',
            value: '10 MP',
        },
        {
            name : 'CPU:',
            value: 'Exynos 2100 8 nhân',
        },
        {
            name : 'RAM:',
            value: '8 GB',
        },
        {
            name : 'ROM:',
            value: '128 GB',
        },
        {
            name : 'camera trước:',
            value: '10 MP',
        },
        {
            name : 'CPU:',
            value: 'Exynos 2100 8 nhân',
        },
        {
            name : 'RAM:',
            value: '8 GB',
        },
        {
            name : 'ROM:',
            value: '128 GB',
        },
        
    ]

const startRecords = 7;
const Specifications = ({ info }: { info: any }) => {
    const [view, setView] = useState(startRecords);
    const handleView = () => {
            view == startRecords ?
            setView(view + parameter.length - startRecords) :
            setView(view- (parameter.length - startRecords))
        }
    return (
        <>
            <div className="description rounded-lg p-6">
                <p className="mb-2 text-lg  text-gray dark:text-white">VÌ SAO BẠN NÊN CHỌN</p>
                <ul className="max-w-md space-y-1 list-none text-gray pl-5 list-inside dark:text-gray-400">
                    {
                        info.map((item: any) => (
                            <li className="item-des" key={item.content}>
                                <p>Bộ sản phẩm gồm: <span>{item.content}</span></p>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='p-6'>
            <p className="mb-2 text-lg  text-gray dark:text-white">Thông số sản phẩm</p>
                <table className="table-auto">
                    <tbody>
                        {
                            parameter.map((item:any, index:number) => (
                                index < view && (
                                    <tr key={item.name} className='border-b-[1px] border-gray_ddd p-4'>
                                        <td>{item.name}</td>
                                        <td>{item.value}</td>
                                    </tr> 
                                )
                            ))
                        }         
                    </tbody>
                </table>
                <button className='border w-full px-6 py-2 mt-3 rounded-sm' onClick={handleView}>{view == startRecords ? 'Xem chi tiết' : 'Thu gọn' }</button>
            </div>
        </>
    )
}

export default Specifications;