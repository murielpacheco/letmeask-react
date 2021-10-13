 import illustrationImg from '../../assets/images/illustration.svg'
 import logoImg from '../../assets/images/logo.svg'
 import googleIcon from '../../assets/images/google-icon.svg'

 import '../../styles/auth.css'

 import {Button} from '../Button'
 export function Home() {
   return (
     <div id="page-auth">
       <aside>
          <img src={illustrationImg} alt="Ilustração simbolizando troca de informações" />
          <strong>Crie salas de perguntas e respostas</strong>
          <p>Troque ideias com a sua audiência em tempo real</p>
       </aside>
       <main>
          <div className="main-content">
            <img src={logoImg} alt="Logo letmeask" />
            <button className="create-room">
              <img src={googleIcon} alt="Logo do google" />
              Crie sua sala com o Google
            </button>
            <div className="separator">ou entre em uma sala</div>
            <form>
              <input
                type="text"
                placeholder="Digite o código da sala"
              />
              <Button type="submit"> Entrar na sala </Button>
            </form>
          </div>
       </main>
     </div>
   )
 }