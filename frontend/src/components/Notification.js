import React ,{useEffect, useState} from 'react'

//Importing icons
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function Notification({ message, type, onClose }) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        setVisible(true)
        // Automatically close the notification after 3 seconds
        const timer = setTimeout(() => {
            setVisible(false);
            setTimeout(onClose, 600); // Wait for fade-out to complete
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const getBgColor=(type)=>{
        switch(type){
            case "success":
                return 'bg-green-500'
            case "failure":
                return 'bg-red-500'
            case "warning":
                return 'bg-orange-500'
            case "info":
                return 'bg-blue-500'
            default:
                return 'bg-green-500'
        }
    }

    return (
        <div className={`fixed items-center top-18 gap-4 flex justify-between right-8 z-50 max-w-xs px-4 py-2 shadow-lg text-white mb-4 transition-opacity duration-300 ${
                visible ? 'opacity-100' : 'opacity-0'} ${getBgColor(type)}`}
        >
            <span>{message}</span>
            <span onClick={()=>onClose()} className='hover:text-black cursor-pointer'><CloseOutlinedIcon style={{fontSize:"1.2rem"}}></CloseOutlinedIcon></span>
        </div>
    );
}
