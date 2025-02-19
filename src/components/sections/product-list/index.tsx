import { UiContainer, UiList, UiShowcase } from "@ui"
import { DataCategories } from "@schemas"
import { ProductShowcaseTypes } from "../product-showcase/types"
import jumbo from "@images/jumbo.png"
import retificador2 from "@images/retificador-2.jpg"

function ProductListApp() {
  const products: ProductShowcaseTypes = {
    products: [
      {
        image: retificador2,
        name: "Retificador AF02",
        features: [
          "Modelos: 50A - 100A - 150A - 8V - 10V - 12V - 16 - 20V",
          "Dimensões: 300 X 250 X 200 (L X P X H)",
        ],
        details: [
          {
            title: "Retificador Alta Frequência AF02 Onda Pulsante Quadrada",
            ampere: "100A ÷ 12.000A",
            voltage: "6V A 60V Outros modelos sob consulta",
            features: [
              "Tecnologia Soft-Switching para Alto rendimento",
              "Economia IGBT de potência ULTRA VELOZ",
              "Uniformidade de eletrodeposição e maior penetração",
            ],
            techFeatures: {
              main: [
                "- Alimentação 380 440  460 Vac 50  60 Hz Trifase +- 10% De Tensão Nominal",
                "- Fator De Potencia Cosf 1",
                "- Regulação Linear De Tensão E Corrente",
                "- Tensão E Corrente Estabilizadas Com Precisão +- 1% De Fundo Escala Para Variação De 10% A 100%",
                "- Ripple 1% Em Corrente Ou Tensão",
                "- Rendimento 90%",
                "- Onda Quadrada Pulsante Em Tensão Ou Corrente Com Frequência Variável",
                "- Proteção De Curto Circuito",
                "- Proteção De Extratemperatura",
                "- Proteção Mínima E Máxima De Alimentação De Rede ",
                "- Proteção De Falta De Uma Fase Na Rede",
                "- Alarme Configurável De Curto Circuito No Tanque",
                "- Limitação Eletrônica De Tensão E De Corrente De Saída",
                "- Painel De Comando Com Display Gráfico",
                "- Comunicação Serial Rs 485, Modbus, Comunicação Serial Ethernet",
                "- Comunicação Analógica 0-10v – 4-20 Ma Com Isolação Galvânica",
                "- Resfriamento Com Ar Forçado",
                "- Temperatura De Funcionamento 0º + 45º C",
                "- Grau De Proteção IP 20",
              ],
              optional: [
                "- Quadro De Comando A Distância",
                "- Contador De Amper Minuto Digital",
                "- Bomba Dosadora",
                "- Programador De Rampas",
                "- Temporizador Digital",
                "- Busina Fim De Ciclo ",
                "- Comunicação Serial Ethernet",
              ],
            },
          },
          {
            title: "Retificador Eletrônico Hesafase",
            ampere: "200A ÷ 50.000A",
            voltage: "4V A 500V",
            techFeatures: {
              main: [
                "- Alimentação 380 Volts 60Hz trifásica +- 10% de tensão nominal",
                "- Regulação com tristores",
                "- Circuito secundário hesafásico",
                "- Regulação linear tensão ecorrente",
                "- Tensão e corrente estabilizada com variação +- 1% de 10% a 100%",
                "- Ripple 4,2% ao valor máximo de tensão ",
                "- Rampa de subida e descida regulável",
                "- Instrumento digital para controle de amperagem e voltagem",
                "- Sinal analógico de leitura de tensão e corrente 0 - 10v com isolação galvânica para CLP, comunicação serial rs 485, CAN",
                "- Chave central com disjuntor magnético",
                "- Limitação eletrônica de máxima tensão e corrente na saída",
                "- Sensor térmico para transformador e diodos",
                "- Resfriamento com ar forçado",
                "- Temperatura de funcionamento 0° + 45°C",
                "- Grau de proteção IP 20.",
              ],
              optional: [
                "- Controlador de amper minuto digital",
                "- Quadro comando a distância",
                "- Filtro nivelamento de tensão de saída (indutância + condensadores)",
                "- Inversão eletrônicos de polaridade",
                "- Bomba dosadora",
                "- Programador de rampa",
                "- Temporizador digital",
                "- Buzina fim de ciclo",
                "- Resfriamento com água em circuito fechado",
                "- Funcionamento com onda pulsante",
                "- Grau de proteção IP 54",
                "- Comunicação ethernet e analógica 4-20ma",
              ],
            },
          },
          {
            title:
              "Retificador Alta Frequência AF01 Onda Pulsante Quadrada para Metais Preciosos",
            ampere: "50A ÷ 200A",
            voltage: "8V - 10V - 12V - 16V - 20V",
            features: [
              "Dimensões:",
              "50A - 100A - 150A | 370x300x260 (LxPxH)",
              "200A | 500x350x330 (LxPxH)",
            ],
            techFeatures: {
              main: [
                "- Alimentação:220 Vac 60Hz monofase +- 10% tensão nominal.",
                "- Frequência de switching 50KHz",
                "- Regulação Linear de tensão e corrente",
                "- Tensão e correntes estabilizadas com precisão de +- 1% de fundo escala para variação de 10% a 100%",
                "- Ripple: 1% fundo escala para todas as regulagens",
                "- Filtro Anti-ruído EMI sobre a rede de alimentação",
                "- Filtro de nivelamento de tensão na saída",
                "- Isolamento galvânico (2500V) entre a rede de alimentação e de saída do retificador",
                "- Temperatura de funcionamento 0° + 45°C",
                "- Grau de proteção IP20.",
              ],
              optional: [
                "- Quadro comando de distância",
                "- Contato Temporizador para Bomba dosadora",
                "- Programador ou rampa",
                "- Busina fim de ciclo",
                "- Comunicação analógica 0 - 10v",
                "- Temporizador Digital.",
              ],
            },
          },
        ],
      },
      {
        image: jumbo,
        name: "Cartucho plissado lavável modelo JUMBO",
        details: [
          {
            title: "Cartucho plissado lavável modelo JUMBO",
            children: (
              <>
                <h3>Características:</h3>
                <ul>
                  <li>
                    - Fabricado em PP; - Disponíveis em vários diâmetros e
                    alturas;
                  </li>
                  <li>- Graus de filtração disponíveis 3-10-30 mícron;</li>
                  <li>
                    - Superfície filtrante de único elemento filtrante de 1,5 a
                    8m2;
                  </li>
                  <li>- Filtro de vedação com dois orings;</li>

                  <li>- Possibilidade de lavagem até 10 vezes;</li>
                </ul>
                <h3>Vantagens:</h3>
                <ul>
                  <li>
                    - Inere à maioria dos produtos químicos e ácidos alcalinos;
                  </li>
                  <li>-Permite a adaptação a diferentes câmaras filtro;</li>
                  <li>
                    - Garante a qualidade do produto filtrado e adapta-se a
                    vários tipos de banhos a serem tratados;
                    <li></li>- Sem desvio;
                  </li>
                  <li>- Redução do custo.</li>
                </ul>
                <h3>Aplicação:</h3>
                <ul>
                  <li>Banhos galvânicos;</li>
                  <li>Banhos desengraxantes;</li>
                  <li>Lavagem com água.</li>
                </ul>
              </>
            ),
            techFeatures: {
              title: "LIMPEZA DO JUMBO",
              children: (
                <>
                  <p>
                    Quanto a limpeza do jumbo, deve-se retirá-lo, lavar o
                    excesso com água, e após, imergir dentro de uma solução de
                    ácido sulfúrico ou clorídrico, (dependendo de qual a base do
                    produto que ele estava) a 10%, o tempo de imersão, é em
                    torno de 6 a 8 horas e após, enxaguar com água.
                  </p>
                  <p>
                    Quanto a perda de rendimento da vazão, em relação ao filtro
                    de papel, o cartucho em PP lavável JUMBO, tem uma perda de
                    carga menor (portanto eficiência maior),tanto pela
                    superfície filtrante do cartucho em relação ao pacote
                    filtrante de papel, e também pela conformação do cartucho.
                  </p>
                  <p>
                    Quanto a diferença de eficiência do cartucho de 3 mícron, a
                    respeito do 30 mícron, podemos afirmar que o cartucho de 3
                    mícron é mais seletivo, com uma maior resistência ao de 30
                    mícrons, mas essa diferença se ressalta mais quando a vazão
                    da bomba é maior.
                  </p>
                  <p>
                    No caso de uma bomba de 7500 l/h a diferença em uma área
                    superficial de 5m² é realmente pouca.
                  </p>
                  <p>
                    Outra discussão é a vazão efetiva da bomba filtro, sabemos
                    que a bomba instalada tem um Qmax = 7500 l/h, e que de
                    norma, há uma perda de carga da câmera filtrante, e pode
                    variar de 15 a 20% dependendo do filtro instalado (JUMBO
                    fica mais perto de 15%, pacote filtrante de papel fica
                    próximo a 20%). Mais a vazão real da bomba filtro, depende
                    de como é sua instalação a respeito do tanque.
                  </p>
                  <p>
                    Todo esse funcionamento depende, de fatores da instalação da
                    bomba filtro em relação ao tanque químico, podemos citar
                    algumas questões em relação às instalações, como a distância
                    entre bomba e tanque, o diâmetro das tubulações de mangueira
                    ou tubo rígido, sendo de tubo rígido deve se observar todas
                    as conexões (curvas, tee, válvulas, etc.) e quantidades
                    usadas na montagem, também a altura que a bomba esta em
                    relação ao tanque.
                  </p>
                  <span>
                    A questão da relação dos micros e a gramatura do papel
                    filtro:
                  </span>
                  <br />
                  <ul>
                    <li>Papel 250 gramas = 6-8 mícron</li>
                    <li>Papel 350 gramas = 3-5 mícron</li>
                    <li>
                      Jumbo de 3 mícron indicado para: banho de cobre ácido,
                      cobre alcalino, níquel, latão...
                    </li>
                    <li>
                      Jumbo de 10 mícron indicado para: banho de cobre ácido,
                      cobre alcalino, níquel...
                    </li>
                    <li>
                      Jumbo de 25-30 mícron indicado para: banho de zinco
                      alcalino, desengraxante...
                    </li>
                  </ul>
                  <p>
                    O filtro jumbo tem uma maior vantagem comparado ao uso no
                    cobre ácido, onde se deve trocar semanalmente os papéis,
                    pelo fato da deterioração do papel, o filtro jumbo enquanto
                    não atingir uma pressão de troca, não é necessário retirar e
                    limpar semanalmente assim, o tempo de troca para manutenção
                    pode ser de 3 a 4 semanas, dependendo do caso que está o
                    químico.
                  </p>
                  <p>
                    Obs: O jumbo não é indicado para banhos que contém cianeto e
                    não deve ser usado de modo algum para processos com carvão
                    ativado.
                  </p>
                </>
              ),
            },
          },
        ],
      },
    ],
  }

  return (
    <div className="product-list">
      <UiContainer>
        <UiList list={DataCategories} />
        <UiShowcase products={products.products} />
      </UiContainer>
    </div>
  )
}

export default ProductListApp
