import { useEffect, useState } from 'react';
import { notificationService } from './notificacion-service.service';
import { Toaster } from 'sileo';

export const NotificationContainer = () => {
    const [notif, setNotif] = useState<{ msg: string, type: string } | null>(null);

    useEffect(() => {
        notificationService.subscribe((msg, type) => {
            setNotif({ msg, type });
            setTimeout(() => setNotif(null), 3000);
        });
    }, []);

    if (!notif) return null;

    return (
        <>
            <Toaster position='top-right'></Toaster>
            <div className={`fixed top-5 right-5 p-4 rounded shadow-lg ${notif.type === 'success' ? 'bg-green-500' : 'bg-red-500'
                } text-white`}>
                {notif.msg}
            </div>
        </>
    );
};