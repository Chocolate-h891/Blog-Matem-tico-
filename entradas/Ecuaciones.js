contenidoEntrada = `
<section>
    <p>Las ecuaciones de primer grado, también llamadas ecuaciones lineales, 
    son igualdades matemáticas en las que la variable tiene exponente 1</p>

    <h3>Procedimiento general para resolver cualquier ecuación de primer grado.</h3>
    
    <ol>
        <li>Destruir signos de agrupación: 
        Elimina paréntesis, corchetes o llaves multiplicando el factor externo por cada término de adentro 
        (propiedad distributiva).</li>
        <li>Eliminar denominadores: 
        Si hay fracciones, multiplica toda la ecuación por el m.c.m. 
        de los denominadores para trabajar solo con enteros.</li>
        <li>Transponer términos: 
        Mueve todos los términos con la variable (como x) a un lado del signo = y 
        todos los números al otro lado (cambiando su signo al pasar de lado).</li>
        <li>Reducir y simplificar: 
        Suma o resta los términos semejantes en cada lado hasta que te quede la forma ax = b.</li>
        <li>Despejar la incógnita: Divide el número del lado opuesto entre el coeficiente a que acompaña a la variable (x = b/a) 
        y comprueba sustituyendo el resultado en la ecuación original.</li>
    </ol>

    <h3>Ejemplo para ecuaciones lineales enteras.</h3>
    
    <p>7x - 3(x - 2) = 2x + 16</p>
    <p>7x - 3x + 6 = 2x + 16</p>
    <p>4x + 6 = 2x + 16</p>
    <p>4x - 2x = 16 - 6</p>
    <p>2x = 10</p>
    <p>x = 10/2</p>
    <p>x = 5</p>

    <h4>Comprobación</h4>
    
    <p>7(5) - 3(5 - 2) = 2(5) + 16</p>
    <p>35 - 3(3) = 10 + 16</p>
    <p>35 - 9 = 26</p>
    <p>4x - 2x = 16 - 6</p>
    <p>26 = 26</p>


    <h3>Ejemplo para ecuaciones fraccionarias.</h3>
    
    <p>(x + 2)/3 - (x - 1)/4 = 2</p>
    <p>El m.c.m. (3, 4) = 12.</p>
    <p>4(x + 2) - 3(x - 1) = 24</p>
    <p>4x + 8 - 3x + 3 = 24</p>
    <p>x + 11 = 24</p>
    <p>x = 24 - 11</p>
    <p>x = 13</p>

    <h4>Comprobación</h4>
    
    <p>(13 + 2)/3 + (13 - 1)/4 = 2</p>
    <p>(15/3) - (12/4) = 2</p>
    <p>5 - 3 = 2</p>
    <p>2 = 2</p>


    <h3>Ejemplo para ecuaciones con signos de agrupación.</h3>
    
    <p>3(2x - 4) - 2[x - (3x + 1)] = 18</p>
    <p>3(2x - 4) - 2[x - 3x - 1] = 18</p>
    <p>3(2x - 4) - 2[-2x - 1] = 18</p>
    <p>6x - 12 + 4x + 2 = 18</p>
    <p>10x - 10 = 18</p>
    <p>10x = 18 + 10</p>
    <p>10x = 28</p>
    <p>x = 2.8</p>

    <h4>Comprobación</h4>
    
    <p>3(2(2.8) - 4) - 2[2.8 - (3(2.8) + 1)] = 18</p>
    <p>3(5.6 - 4) - 2[2.8 - (8.4 + 1)] = 18</p>
    <p>3(1.6) - 2[2.8 - 9.4] = 18</p>
    <p>4.8 - 2[-6.6] = 18</p>
    <p>4.8 + 13.2 = 18</p>
    <p>18 = 18</p>


    <h3>Ejemplo para ecuaciones con literales.</h3>
    
    <p>2(ax + 3) = a(x + 5) - 1 (Resolver para x)</p>
    <p>2ax + 6 = ax + 5a - 1</p>
    <p>2ax - ax = 5a - 1 - 6</p>
    <p>ax = 5a - 7</p>
    <p>x = (5a - 7)/a</p>

    <h4>Comprobación</h4>
    
    <p>2(a x ((5a-7)/a) + 3) = (((5a-7)/a) + 5) - 1</p>
    <p>2((5a - 7) + 3 = ((5a - 7) + 5a) - 1</p>
    <p>2 (5a - 4) = (10a - 7) - 1</p>
    <p>10a - 8 = 10a - 8</p>


    <h3>Ejemplo de problema de planteamiento</h3>
    <p>Dos desarrolladores de software, Ana y Carlos, deben revisar las líneas de código de un nuevo proyecto. 
    Ana, puede revisar todo el código en 6 horas. Carlos, tarda 12 horas él solo. 
    Si ambos deciden trabajar juntos al mismo tiempo ¿cuántas horas tardarán en revisar todo el proyecto completo?</p>

    <h4>1. Incógnita</h4>
    <p>x = Tiempo total (en horas) que tardan Ana y Carlos en revisar el código trabajando juntos.</p>
    
    <h4>2. Traducción al Lenguaje Algebraico</h4>
    <p>Ana: Si hace todo el trabajo en 6 horas, en 1 hora realiza 1/6 del trabajo.</p>
    <p>Carlos: Si hace todo el trabajo en 12 horas, en 1 hora realiza 1/12 del trabajo.</p>
    <p>Juntos: Si hacen todo el trabajo en x horas, en 1 hora realizan 1/x del trabajo.</p>

    <h4>3. Ecuación</h4>
    <p>1/6 + 1/12 = 1/x</p>

    <h4>4. Solución de la Ecuación</h4>
    <p>m.c.m. de 6 y 12 es 12</p>
    <p>1/12 + 1/12 = 1/x</p>
    <p>3/12 = 1/x</p>
    <p>1/4 = 1/x</p>
    <p>x = 4 horas</p>

    <h4>5. Validación contra el Enunciado</h4>
    <p>En 4 horas:Ana habrá revisado: 4 x 1/6 = 4/6 = 2/3</p>
    <p>En 4 horas:Carlos habrá revisado: 4 x 1/12 = 4/12 = 1/3</p>
    <p>En 4 horas: Ambos habran revisado: 2/3 + 1/3 = 3/3 = 1</p>
</section>`
