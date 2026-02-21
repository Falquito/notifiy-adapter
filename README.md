# 🔔 Notificaciones en un solo lugar

Un servicio de notificaciones agnóstico y altamente escalable basado en el **Patrón Adaptador**. 

Este paquete permite integrar alertas en tu aplicación y cambiar de proveedor de UI (como Sileo o Ant Design) desde un solo lugar, sin necesidad de modificar la lógica de tus vistas o componentes. Ideal para arquitecturas limpias y proyectos desarrollados en TypeScript.

## ✨ Características

- 🔌 **Plug & Play:** Cambia de proveedor de notificaciones cambiando solo un parámetro.
- 🛡️ **Tipado fuerte:** Escrito 100% en TypeScript para un autocompletado excelente.
- 📦 **Desacoplado:** Evita el *vendor lock-in* (dependencia excesiva de una sola librería externa).
- ⚛️ **Fácil integración:** Diseñado para funcionar perfectamente en entornos modernos como React, Next.js o Vanilla JS.

---

## 🚀 Instalación

Para instalar el servicio en tu proyecto, se necesita sileo y antdesign (que son los que acepta hasta ahora), puedes ejecutar el siguiente comando en tu terminal:

```bash
npm install sileo antd
```

## 💻 Uso Básico

Instanciar y utilizar el servicio es muy directo. Solo requieres importar la clase y elegir el proveedor.
```
import { NotificationService } from '/ruta/de/tu/pc';

// 1. Instanciar el servicio (usa 'sileo' por defecto, o puedes pasar 'antd')
const notifier = new NotificationService('antd');

// 2. Disparar notificaciones en cualquier parte de tu código
notifier.success('¡El usuario fue creado con éxito!');
notifier.error('Ocurrió un error al procesar la solicitud.');
```
### Cambiar de proveedor en tiempo de ejecución
Si surge la necesidad de cambiar el estilo de las notificaciones de forma dinámica, puedes hacerlo fácilmente:
```
notifier.setProvider('sileo');
notifier.info('Ahora las notificaciones usan el estilo de Sileo.');
```
## ⚛️ Integración con React (Custom Hook)

Para proyectos en React, es muy conveniente envolver esta clase en un Custom Hook para utilizarla a lo largo de todos tus componentes de manera limpia:
```
import { useMemo } from 'react';
import { NotificationService, ProviderName } from '/ruta/de/tu/pc';

export const useNotification = (provider: ProviderName = 'sileo') => {
  const notifier = useMemo(() => new NotificationService(provider), [provider]);

  return notifier;
};
```
## Uso en el componente:
```
import { useNotification } from '../hooks/useNotification';

export const MiComponente = () => {
  const notify = useNotification('antd');

  const handleSave = () => {
    // Lógica de guardado...
    notify.success('¡Datos guardados correctamente!');
  };

  return <button onClick={handleSave}>Guardar Datos</button>;
};
```
## 🛠️ Cómo agregar nuevos proveedores
El diseño está pensado para crecer. Si deseas usar una librería diferente (por ejemplo, react-hot-toast), solo precisas crear un nuevo adaptador que respete la interfaz NotificationProvider:

Crea tu adaptador:
```
import toast from 'react-hot-toast';
import { NotificationProvider } from './types';

export const hotToastAdapter: NotificationProvider = {
  success: (msg) => toast.success(msg),
  error: (msg) => toast.error(msg),
  warning: (msg) => toast(msg, { icon: '⚠️' }),
  info: (msg) => toast(msg, { icon: 'ℹ️' }),
};
```
Agrégalo al objeto providers en el archivo principal y listo.

🤝 Contribuciones
¡Las contribuciones son bienvenidas! Si deseas agregar adaptadores para otras librerías populares, puedes abrir un Pull Request o reportar un Issue en el repositorio.

📄 Licencia
Este proyecto está bajo la Licencia MIT - mira el archivo LICENSE.md para más detalles.