import './Home.css'
import logo from '../assets/festFoot.png'
import saida from '../assets/BotaoDeSaida.png'
import interrogacao from '../assets/SimboloInterrogacao.png'
import uplodad from '../assets/SimboloUpload.png'

function Home() {


    return (
        <>
            <div className='container'>
                <aside>
                    <img src={logo} alt="Logo Fest" className='logoFest' />
                    <img src={saida} alt="Botao de Saida" className='botaoDeSaida' />
                </aside>


                <h1 className='cadastro'>Faça seu Cadastro</h1>

                <div className='formulario'>
                    <div className='coluna1'>
                        <form>
                            <label htmlFor="nome">Nome Completo *</label>
                            <input type="text" name="nome" placeholder='Digite aqui seu nome completo' />

                            <label htmlFor="email">Email *</label>
                            <input type="email" name="email" placeholder='Digite aqui seu email' />

                            <label htmlFor="senha">Senha *
                                <img src={interrogacao} alt="Simbolo de Interrogação" className='interrogacao'/>
                            </label>
                            <input type="password" name="senha" placeholder='Crie sua senha' />

                            <label htmlFor="senha">Repita a Senha*</label>
                            <input type="password" name="senha" placeholder='Digite novamente a senha criada' />

                            <label htmlFor="Cidade">Cidade / UF</label>
                            <select name="Cidades">
                                <option value="Selecione a sua cidade">Selecione a sua cidade</option>
                                <option value="Petrópolis">Petrópolis</option>
                                <option value="Rio de Janeiro">Rio de Janeiro</option>
                                <option value="Teresópolis">Teresópolis</option>
                                <option value="Nova Friburgo">Nova Friburgo</option>
                            </select>

                            <label htmlFor="cpf">CPF *</label>
                            <input type="text" name="cpf" placeholder='Digite seu CPF' />

                            <label htmlFor="telefone">Telefone</label>
                            <input type="text" name="telefone" placeholder='Digite seu telefone com DDD' />
                        </form>
                    </div>
                    <div className='coluna2'>
                        <form>
                            <label htmlFor="data">Data de Nascimento *</label>
                            <input type="date" name="data de nascimento"/>

                            <label htmlFor="linkedln">Linkedln</label>
                            <input type="text" name="linkedln" placeholder='Digite o endereço do seu perfil' />

                            <label htmlFor="objetivo profissional">Selecione o seu objetivo</label>
                            <select name="objetivo profissional">
                                <option value="Selecione o seu objetivo">Selecione o seu Objetivo</option>
                                <option value="Qualificação profissional"> Qualificação Profissional</option>
                                <option value="Transição de Carreira">Transição de Carreira</option>
                                <option value="Atualização Curricular">Atualização Curricular</option>
                                <option value="Aperfeiçoamento">Aperfeiçoamento</option> <option value="Nova Friburgo">Nova Friburgo</option>
                            </select>

                            <label htmlFor="curriculo">Curriculo*
                            </label>
                            <input title='curriculo' accept=".pdf" type="file"id='curriculo' name="curriculo" placeholder='Carregue o arquivo em PDF'/>

                            <label htmlFor="miniBiografia">Mini-Biografia</label>
                            <textarea maxLength={250} className='miniBiografia' type="text" name="miniBiografia" placeholder='Digite um texto de até 250 caracteres' />
                        </form>
                    </div>
                    </div>
                    <div className='coluna3'></div>
                </div>
            
        </>


    )
}


export default Home;
