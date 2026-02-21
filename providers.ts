import { antDesignAdapter, sileoAdapter } from "./adapters";

export const providers = {
    sileo: sileoAdapter,
    antd: antDesignAdapter,
};

export type ProviderName = keyof typeof providers;