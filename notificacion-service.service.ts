import type { NotificationProvider } from "../../types/notificacionProvider";
import { providers, type ProviderName } from "./providers";

export class NotificationService {

    private provider: NotificationProvider;

    constructor(providerName: ProviderName = 'sileo') {
        this.provider = providers[providerName];
    }

    setProvider(providerName: ProviderName) {
        this.provider = providers[providerName];
    }

    success(message: string) {
        this.provider.success(message);
    }

    error(message: string) {
        this.provider.error(message);
    }

    info(message: string) {
        this.provider.info(message)
    }

    warning(message: string) {
        this.provider.warning(message)
    }
}