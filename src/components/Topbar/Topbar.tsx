import React, { useRef, useState } from 'react'
import { Bar, Button, Title } from './Styles'
import { useTheme } from '../../hooks/useTheme'
import ThemeSwitch from '../../assets/ThemeSwitch.json'
import { Player } from '@lottiefiles/react-lottie-player'

const Topbar = () => {
  const { toggleTheme, selectedTheme } = useTheme()
  const [disableButton, setDisableButton] = useState(false)

  const playerRef = useRef<Player>(null)

  const onLoadLottie = () => {
    if (selectedTheme === 'dark') {
      playerRef.current?.setSeeker(140)
    }
  }

  const onClickSwitch = () => {
    toggleTheme()
    playerRef.current?.setPlayerSpeed(2)
    setDisableButton(true)

    if (selectedTheme === 'light') {
      playerRef.current?.setPlayerSpeed(2)
      playerRef.current?.setSeeker(30)
      playerRef.current?.play()

      setTimeout(() => {
        playerRef.current?.pause()
        setDisableButton(false)
      }, 550)

      return
    }


    playerRef.current?.setSeeker(140)
    playerRef.current?.play()

    setTimeout(() => {
      setDisableButton(false)
    }, 550)
  }

  return (
    <Bar>
      <Button disable={disableButton} onClick={onClickSwitch}>
        <Player
          ref={playerRef}
          src={ThemeSwitch}
          loop={false}
          autoplay={false}
          onEvent={event => {
            if (event === 'load') onLoadLottie()
          }}
        />
      </Button>


      <Title href="https://www.reddit.com/r/reactjs/" target="_blank">
        REACT<span>JS</span>
      </Title>
    </Bar>
  )
}

export default Topbar