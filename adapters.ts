import { sileo } from 'sileo';
import { message as antdMessage } from 'antd';
import type { NotificationProvider } from '../src/types/notificacionProvider';
import { duration, titleError, titleInfo, titleSuccess, titleWarning } from './constants';
export const sileoAdapter: NotificationProvider = {
    success: (msg) => sileo.success({ title: titleSuccess, description: msg, duration: duration }),
    error: (msg) => sileo.error({ title: titleError, description: msg, duration: duration }),
    warning: (msg) => sileo.warning({ title: titleWarning, description: msg, duration: duration }),
    info: (msg) => sileo.info({ title: titleInfo, description: msg, duration: duration }),
};

export const antDesignAdapter: NotificationProvider = {
    success: (msg) => antdMessage.success(msg),
    error: (msg) => antdMessage.error(msg),
    warning: (msg) => antdMessage.warning(msg),
    info: (msg) => antdMessage.info(msg),
};