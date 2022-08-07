
import { useNavigate } from 'react-router-dom'

import { Lottie } from 'components'

import { femaleAvatarProfilePicAnimation } from 'assets'

import { GlassCard, Button } from 'components'

import { Container, ContainerButton, TextCard, TitleCard } from './styles'



export const SignIn = () => {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate('/home')
    }



    return (
        <Container>
            <GlassCard>
                <Lottie
                    animationData={femaleAvatarProfilePicAnimation}
                    width={150}
                    height={150}
                />
                <TitleCard>Gerencie a mesada de seus filhos com Crypto Moedas!</TitleCard>
                <TextCard>Para desfrutar de todos benefícios do <b>Carteira Compartilhada</b>, faça vínculo com sua carteira de crypto moedas!</TextCard>

                <ContainerButton>
                    <Button title='Conectar Carteira' onClick={handleNavigate} />
                </ContainerButton>
            </GlassCard>
        </Container>
    )
}