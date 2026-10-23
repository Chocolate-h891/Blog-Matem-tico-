contenidoEntrada = `
<section>
    <p>Es el proceso inverso a la multiplicación. 
    Consiste en expresar una expresión algebraica como el producto de sus factores más simples.</p>

    <h3>Suma y diferencia de cubos</h3>
    <p>Es un binomio separados por un signo más (+) o un signo menos (-).
    Tanto los terminos numéricos como las variables tienen raíz cúbica exacta</p>

    <h4>Como reconocerlo</h4>
    <ul>
        <li>Tiene 2 términos.</li>
        <li>Los dos términos están sumándose (a<sup>3</sup> + b<sup>3</sup>) o restándose (a<sup>3</sup> - b<sup>3</sup>).</li>
        <li>Los coeficientes tienen raíz cúbica exacta y los exponentes de las variables son múltiplos de 3.</li>
    </ul>

    <h4>Fórmula</h4>
    <p>a<sup>3</sup> &plusmn b<sup>3</sup> = (a &plusmn b)(a<sup>2</sup> &plusmn ab &plusmn b<sup>2</sup>)</p>

    <h4>Ejemplo</h4>
    <p>8x<sup>3</sup> - 27= &#8731;8x<sup>3</sup> - &#8731;27 = (2x - 3)((2x)<sup>2</sup> + (2x)(3) + 3<sup>2</sup>) 
    = (2x - 3)(4x<sup>2</sup> + 6x + 9)</p>

    <h4>Comprobación</h4>
    <p>(2x - 3)(4x<sup>2</sup> + 6x + 9) = 8x<sup>3</sup> + 12x<sup>2</sup> + 18x - 12x<sup>2</sup> - 18x - 27= 8x<sup>3</sup> - 27</p>



    <h3>Trinomio de la forma x<sup>2</sup> + bx + c</h3>
    <p>Es un trinomio donde el coeficiente del término cuadrático es 1.</p>

    <h4>Como reconocerlo</h4>
    <ul>
        <li>Tiene 3 términos.</li>
        <li>El primer término tiene coeficiente 1 (es decir, es x<sup>2</sup>).</li>
        <li>El primer término tiene grado 2 (x<sup>2</sup>).</li>
        <li>El tercer término es una constante (número independiente).</li>
        <li>m + n = b sumados dan el coeficiente del medio.</li>
        <li> m * n = c multiplicados dan el término independiente.</li>
    </ul>

    <h4>Fórmula</h4>
    <p>x<sup>2</sup> + (m + n)x + mn = (x + m)(x + n)</p>

    <h4>Ejemplo</h4>
    <p>x<sup>2</sup> - 7x + 12 = (x - 3)(x - 4)</p>

    <h4>Comprobación</h4>
    <p>(x - 3)(x - 4) = x(x) + x(-4) - 3(x) - 3(-4) = x<sup>2</sup> - 4x - 3x + 12 = x<sup>2</sup> - 7x + 12</p>



    <h3>Trinomio de la forma x<sup>2</sup> + bx + c (aspa simple)</h3>
    <p>Se utiliza para trinomios cuadráticos donde el coeficiente del término cuadrático "a" es diferente de 1.</p>

    <h4>Como reconocerlo</h4>
    <ul>
        <li>Tiene 3 términos.</li>
        <li>El coeficiente del término x<sup>2</sup> es diferente de 1</li>
        <li>El primer término tiene grado 2 (x<sup>2</sup>).</li>
        <li>El tercer término es una constante (número independiente).</li>
    </ul>

    <h4>Fórmula</h4>
    <p>ax<sup>2</sup> + bx + c = (ax1 + c1)(ax2 + c2)</p>
    <p>En la columna de la izquierda dos terminos que multiplicados den ax<sup>2</sup></p>
    <p>En la columna de la derecha dos terminos que multiplicados den c</p>
    <p>Se multiplica en cruz y se suman, el resultado debe ser bx</p>
   
    <h4>Ejemplo</h4>
    <p>3x<sup>2</sup> + 10x + 8</p>

    <table>
        <thead>
            <tr>
                <th>3x<sup>2</sup></th>
                <th>10x</th>
                <th>8</th>
                <th> </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>3x</td>
                <td> </td>
                <td>4</td>
                <td> = 4x</td>
            </tr>
            <tr>
                <td>x</td>
                <td> </td>
                <td>2</td>
                <td> = 6x</td>
            </tr>
            <tr>
                <td> </td>
                <td> </td>
                <td> </td>
                <td> 10x</td>
            </tr>
        </tbody>
    </table>
    <p>3x<sup>2</sup> + 10x + 8 = (3x + 4)(x + 2)</p>

    <h4>Comprobación</h4>
    <p>(3x + 4)(x + 2) = 3x(x) + 3x(2) + 4(x) + 4(2)= 3x<sup>2</sup> + 6x + 4x + 8= 3x<sup>2</sup> + 10x + 8</p>



    <h3>Estrategia de factorización</h3>

    <h4>Paso 1</h4>
    <ul>
        <li>Busca el Factor común (los elementos en común de todos los terminos, ya sea un número, una letra o ambos)</li>
        <li>Fórmula: ab + ac = a(b + c)</li>
        <li>Ejemplo: En 4x<sup>3</sup> + 8x<sup>2</sup>, sacas 4x<sup>2</sup>(x + 2).</li>
    </ul>


    <h4>Paso 2</h4>
    <p>Cuenta cuántos términos tiene la expresión dentro del paréntesis.</p>


    <p><b>Si tiene 2 terminos (Binomio)</b></p>
        <table>
        <thead>
            <tr>
                <th>Caso</th>
                <th>¿Cómo reconocerlo?</th>
                <th>Fórmula</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Diferencia de cuadrados</td>
                <td>Los terminos son separados por una resta y ambos tienen una raíz cuadrada exacta.</td>
                <td>a<sup>2</sup> - b<sup>2</sup> = (a - b)(a + b)</td>
            </tr>
            <tr>
                <td>Suma y diferencia de cubos</td>
                <td>Es un binomio separados por un signo más (+) o un signo menos (-). Tanto los terminos numéricos como las variables tienen raíz cúbica exacta</td>
                <td>a<sup>3</sup> &plusmn b<sup>3</sup> = (a &plusmn b)(a<sup>2</sup> &plusmn ab &plusmn b<sup>2</sup>)</td>
            </tr>
        </tbody>
    </table>


    <p><b>Si tiene 3 terminos (Trinomio)</b></p>
        <table>
        <thead>
            <tr>
                <th>Caso</th>
                <th>¿Cómo reconocerlo?</th>
                <th>Fórmula</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Trinomio Cuadrado Perfecto</td>
                <td>El primer y el tercer término tienen raíces cuadradas exactas, y el segundo término es el doble del producto de esas raíces.</td>
                <td>a<sup>2</sup> &plusmn 2ab + b<sup>2</sup> = (a &plusmn b)<sup>2</sup></td>
            </tr>
            <tr>
                <td>Trinomio de la forma x<sup>2</sup> + bx + c</td>
                <td>El coeficiente del término cuadrático es 1.</td>
                <td>x<sup>2</sup> + (m + n)x + mn = (x + m)(x + n)</td>
            </tr>
             <tr>
                <td>Trinomio de la forma x<sup>2</sup> + bx + c (aspa simple)</td>
                <td>El coeficiente del término cuadrático "a" es diferente de 1.</td>
                <td>ax<sup>2</sup> + bx + c = (ax1 + c1)(ax2 + c2)</td>
            </tr>
        </tbody>
    </table>




</section>`
