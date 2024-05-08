import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        system: 'The system',
        systemText:
          'The system consists of a mobile app for cleaners, a website and mobile app for customers, and an admin panel.',
        mobileWeb: 'Mobile+Web Customer',
        mobileCleaner: 'Mobile Cleaner',
        admin: 'Admin panel',
        howItWorks: 'How it works',
        howItWorksText1:
          "A client requests cleaning for a specific date and time via the website or mobile app. This request is sent to the mobile app of all cleaners who have the request's address within their working radius.",
        howItWorksText2:
          'The first cleaner to accept the job is assigned, and all details are sent through the app. When a cleaner starts a job, a checklist for progress tracking appears.',
        mobileApp: 'Mobile app cleaner',
        mobileAppText:
          'The intuitive mobile app lets cleaners set their work hours and radius to suit personal preferences, accept requests, manage workloads, and streamline operations and after completing each job receive instant payment.',
        menuBar: 'Menu bar',
        menuBarText1: 'There are four menu icons in the app: request, schedule, notifications and profile.',
        menuBarText2:
          'Which will we explore in detail, however before using the app for the first time, you need to activate your profile in the system by setting your working hours and working radius.',
        workingHours: 'Working hours',
        workingHoursText1:
          'Here, you set the working hours for the current week and by pressing the pencil icon it allows you to adjust your working hours for each day. You can set multiple time intervals for work each day.',
        workingHoursText2:
          "For example, you may choose to work in the morning and late afternoon, with hours set from 10:00 to 12:00 and 15:15 to 18:00 respectively. We recommend reviewing and editing your weekly calendar every Sunday to ensure it aligns with your preferences. You can also copy the previous week's calendar for faster setup.",
        workingHoursText3:
          'You can change your working hours at any time or day. If your plans change and you need to make adjustments simply delete those hours by selecting the pencil icon and pressing the delete button. Remember to double-check your changes before leaving the working hours section.',
        workingRadius: 'Working radius',
        workingRadiusText1: 'Go to: Profile -> Working Radius',
        workingRadiusText2:
          'Next you set your working radius. It is a circle from your home, extending a distance from the centre in all directions. Think of it as a circle with you in the middle where the outer circle represents the maximum distance you are willing to travel to a job. Initially, we suggest leaving it wide to learn where most jobs are coming from, which may be slightly beyond your initial radius. After entering the kilometres, press save.',
        workingRadiusText3:
          'With these steps completed, you are now active and will receive requests that matches your working hours and radius.',
        status: 'Status',
        statusText1:
          'Your profile icon will display a small coloured circle indicating your current status: green, orange, or red.',
        statusText2: 'Green: You are within your working hours.',
        statusText3: 'Orange: You are doing a job.',
        statusText4: 'Red: You are outside of your working hours.',
        request: 'Request',
        requestText:
          'The first icon on the left shows requests that match your working hours and radius. A new request will be indicated by a small circle on the icon. When you press it, you will see each request listed, where you can click to view the details and the location on the map. Upon accepting a request (and being the first to do so), all information is sent to the next icon on the right\u00A0- Schedule.',
        schedule: 'Schedule',
        scheduleText:
          'Under schedule, you can see all your upcoming jobs and there is also a calendar view with a highlight on the days that you have accepted jobs on. If you have multiple jobs, they will be listed as line items where you can press each one to see the details and the expected salary.',
        notifications: 'Notifications',
        notificationsText:
          'Under the notification icon, you will see a list of individual notifications you have received. A new notification will be indicated by a small circle on the icon. Some notifications will have a hyperlink that will lead you directly to the relevant page. For instance, if you receive a notification reminding you to set your working hours, you will see a small green line labelled "Set Working Hours." Clicking on this link will take you to the place for setting your working hours within your profile settings.',
        bonuses: 'Bonuses',
        bonusesText1:
          'There are three ways to earn extra: non-standard hours, referrals, and customer conversion to regular.',
        bonusesText2:
          'Non-standard hours: Cleaners receive an extra 20% on expedited cleanings and up to 200% during off-peak hours, including early mornings, late nights, and holidays.',
        bonusesText3:
          'Referrals: By referring a new client, cleaners receive a 10% share of their bookings for an entire year.',
        bonusesText4:
          'Conversion to regular: When a new client decides to schedule regular cleanings, the cleaner who performed the last job is given the option to continue with the regular assignment. This serves as an incentive for delivering exceptional service, transforming a one-time job into recurring earnings.',
        usp: 'USP (unique selling proposition)',
        uspText1:
          'In home cleaning, where services may not vary significantly, our USP (unique selling proposition) will be centred around convenience:',
        uspText2: '-      Availability 24/7',
        uspText3: '-      Swift booking and confirmation',
        uspText4: '-      Fast service delivery',
        uspText5: '-      Compliance with local laws',
        uspText6:
          'In launching SDL, the product (the service itself) holds paramount importance. The success and sustainability of our business depend on delivering an exceptional service. Without a consistent service that exceeds client expectations, retaining clients becomes challenging, and the overall business model unsustainable. Therefore, prioritizing and ensuring the quality and reliability of the service is the cornerstone for scaling our company. The best advertising is a satisfied client.',
        targetCustomer: 'Target customer',
        targetCustomerText:
          'The primary clients we target are international second- or holiday home owners and real estate agents catering to this demographic. We specifically focus on those who genuinely understand and value our unique selling proposition (USP) and appreciate the availability, quality, and reliability of the service we provide. These clients are not highly price-sensitive and place significant importance on convenience. If we fulfil our promise of excellence, they are likely to become valuable ambassadors for us.',
      },
    },
    es: {
      translation: {
        system: 'El sistema',
        systemText:
          'El sistema consta de una aplicación móvil para limpiadores, un sitio web y una aplicación móvil para clientes, y un panel de administración.',
        mobileWeb: 'Móvil+Web Cliente',
        mobileCleaner: 'Móvil Limpiadora',
        admin: 'Panel de administrador',
        howItWorks: 'Cómo funciona',
        howItWorksText1:
          'Un cliente solicita una limpieza para una fecha y hora específicas a través del sitio web o la aplicación móvil. Esta solicitud se envía a la aplicación móvil de todos los limpiadores que tengan la dirección de la solicitud dentro de su radio de trabajo.',
        howItWorksText2:
          'Se asigna al primer limpiador que acepta el trabajo y todos los detalles se envían a través de la aplicación. Cuando un limpiador comienza un trabajo, aparece una lista de verificación para el seguimiento del progreso.',
        mobileApp: 'Limpiador de aplicaciones móviles',
        mobileAppText:
          'La intuitiva aplicación móvil permite a los limpiadores establecer sus horas y radio de trabajo para adaptarlos a sus preferencias personales, aceptar solicitudes, administrar cargas de trabajo y agilizar las operaciones y, después de completar cada trabajo, recibir un pago instantáneo.',
        menuBar: 'Barra de menús',
        menuBarText1: 'Hay cuatro íconos de menú en la aplicación: solicitud, programación, notificaciones y perfil.',
        menuBarText2:
          'Lo exploraremos en detalle; sin embargo, antes de usar la aplicación por primera vez, debe activar su perfil en el sistema configurando su horario de trabajo y su radio de trabajo.',
        workingHours: 'Horas Laborales',
        workingHoursText1:
          'Aquí, usted configura las horas de trabajo para la semana actual y al presionar el ícono de lápiz le permite ajustar sus horas de trabajo para cada día. Puede establecer varios intervalos de tiempo para trabajar cada día.',
        workingHoursText2:
          'Por ejemplo, puedes optar por trabajar por la mañana y por la tarde, con un horario establecido de 10:00 a 12:00 y de 15:15 a 18:00 respectivamente. Recomendamos revisar y editar su calendario semanal todos los domingos para asegurarse de que se ajuste a sus preferencias. También puedes copiar el calendario de la semana anterior para una configuración más rápida.',
        workingHoursText3:
          'Puedes cambiar tu horario laboral en cualquier momento o día. Si sus planes cambian y necesita hacer ajustes, simplemente elimine esas horas seleccionando el ícono de lápiz y presionando el botón Eliminar. Recuerde verificar sus cambios antes de salir de la sección de horas de trabajo.',
        workingRadius: 'Radio de trabajo',
        workingRadiusText1: 'Vaya a: Perfil -> Radio de trabajo',
        workingRadiusText2:
          'A continuación establece su radio de trabajo. Es un círculo desde tu casa, que se extiende desde el centro en todas direcciones. Piense en ello como un círculo con usted en el medio, donde el círculo exterior representa la distancia máxima que está dispuesto a viajar para llegar a un trabajo. Inicialmente, sugerimos dejarlo amplio para saber de dónde provienen la mayoría de los trabajos, que pueden estar ligeramente más allá de su radio inicial. Después de introducir los kilómetros, pulsa guardar.',
        workingRadiusText3:
          'Una vez completados estos pasos, ahora está activo y recibirá solicitudes que coincidan con su horario y radio de trabajo.',
        status: 'Estado',
        statusText1:
          'El ícono de su perfil mostrará un pequeño círculo de color que indica su estado actual: verde, naranja o rojo.',
        statusText2: 'Verde: Estás dentro de tu horario laboral.',
        statusText3: 'Naranja: Estás haciendo un trabajo.',
        statusText4: 'Rojo: Estás fuera de tu horario laboral.',
        request: 'Pedido',
        requestText:
          'El primer ícono a la izquierda muestra solicitudes que coinciden con su horario y radio de trabajo. Una nueva solicitud se indicará con un pequeño círculo en el icono. Cuando lo presione, verá cada solicitud en la lista, donde puede hacer clic para ver los detalles y la ubicación en el mapa. Al aceptar una solicitud (y ser el primero en hacerlo), toda la información se envía al siguiente ícono a la derecha: Programar.',
        schedule: 'Cronograma',
        scheduleText:
          'En Programación, puede ver todos sus próximos trabajos y también hay una vista de calendario con un resaltado de los días en los que aceptó trabajos. Si tiene varios trabajos, se enumerarán como líneas de pedido donde podrá presionar cada uno para ver los detalles y el salario esperado.',
        notifications: 'Notificaciones',
        notificationsText:
          'Debajo del ícono de notificación, verá una lista de notificaciones individuales que ha recibido. Una nueva notificación se indicará con un pequeño círculo en el icono. Algunas notificaciones tendrán un hipervínculo que lo llevará directamente a la página correspondiente. Por ejemplo, si recibe una notificación que le recuerda que debe establecer su horario de trabajo, verá una pequeña línea verde con la etiqueta "Establecer horario de trabajo". Al hacer clic en este enlace, accederá al lugar para configurar su horario de trabajo dentro de la configuración de su perfil.',
        bonuses: 'Bonificaciones',
        bonusesText1:
          'Hay tres formas de ganar dinero extra: horas no estándar, referencias y conversión de clientes a clientes regulares.',
        bonusesText2:
          'Horario no estándar: los limpiadores reciben un 20 % adicional en limpiezas aceleradas y hasta un 200 % durante las horas de menor actividad, incluidas las primeras horas de la mañana, las últimas horas de la noche y los días festivos.',
        bonusesText3:
          'Referencias: al recomendar a un nuevo cliente, los limpiadores reciben una participación del 10% de sus reservas durante todo un año.',
        bonusesText4:
          'Conversión a limpieza regular: cuando un nuevo cliente decide programar limpiezas regulares, el limpiador que realizó el último trabajo tiene la opción de continuar con la tarea regular. Esto sirve como incentivo para brindar un servicio excepcional, transformando un trabajo único en ingresos recurrentes.',
        usp: 'PVU (propuesta de venta única)',
        uspText1:
          'En la limpieza del hogar, donde los servicios pueden no variar significativamente, nuestra PVU (propuesta de venta única) se centrará en la conveniencia:',
        uspText2: '-      Disponibilidad 24 horas al día, 7 días a la semana',
        uspText3: '-      Reserva y confirmación rápidas',
        uspText4: '-      Entrega de servicios rápida',
        uspText5: '-      Cumplimiento de las leyes locales',
        uspText6:
          'Al lanzar SDL, el producto (el servicio en sí) tiene una importancia primordial. El éxito y la sostenibilidad de nuestro negocio dependen de brindar un servicio excepcional. Sin un servicio consistente que supere las expectativas del cliente, retenerlos se vuelve un desafío y el modelo de negocio general insostenible. Por ello, priorizar y asegurar la calidad y confiabilidad del servicio es la piedra angular para escalar nuestra empresa. La mejor publicidad es un cliente satisfecho.',
        targetCustomer: 'Cliente objetivo',
        targetCustomerText:
          'Los principales clientes a los que nos dirigimos son propietarios internacionales de segundas viviendas o viviendas de vacaciones y agentes inmobiliarios que atienden a este grupo demográfico. Nos centramos específicamente en aquellos que realmente entienden y valoran nuestra propuesta de venta única (PVU) y aprecian la disponibilidad, calidad y confiabilidad del servicio que brindamos. Estos clientes no son muy sensibles al precio y dan mucha importancia a la comodidad. Si cumplimos nuestra promesa de excelencia, es probable que se conviertan en valiosos embajadores para nosotros.',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
