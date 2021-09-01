## Proyecto deploy firebase angular

  - Crear una aplicación de gestion de alquileres

      - vamos una aplicacion que me permite mostrar casas en alquiler, ver los datos de la casa y posteriormente situarla en un mapa en google maps.
  
  1 - Crear modelo de datos para las casas. Inicialmente vamos a crear un array dentro del servicio que tenga cuatro casas.
  2 - Crear un interface que defina dicho modelo.
              id: number, titulo: string, direccion: string, ciudad: string, numerohabitaciones: number, propietario: string, disponibilidad: boolean, foto: string, lat: number, long: number

  3 - en app componente crearemos un menu transversal con dos botones Listado y nueva casa
  4 - Listado cargará componente home donde se visualizaran todas las casas a modo de cards
  5 - cada casa tendrá un boton que me lleve a la vista de la casa, donde se visualizaran todos los datos y el mapa.
  6 - Nueva casa tendra un formulario de tipo template sin validaciones. que guarden en mi array los datos del casa. 

 //TODO ESTO LO VAMOS HACER CONTRA UN ARRAY EL SERVICIO, CUANDO MONTEMOS FIREBASE SUSTIUREMOS LAS FUNCIONES DE ARRAY DEL SERVICIO POR LA PETICION A FIREBASE.

    1 tarea crear el servicio, interface y generar rutas segun lo explicado arriba.
    2 crear los componentes para asignar a las rutas especificas.

    
//Siguiente tarea

    1 - en el servicio de houses crear un metodo que me devuelva todas las casas.
    2 - consumirlo dentro del componente home y pintar cada casa con una card de bootstrap en dicho componente.
    3 - crear un boton de ver detalle que link a la vista de detalle de cada casa.
    4 - las casas que esten disponible tendrá un borde verde y las no disponible un rojo




