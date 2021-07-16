import { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, PanelHeaderBack, Group, Card, Text, Button } from '@vkontakte/vkui';

import { cardRowDir, leftSideMygames, rightSideMygames, btnStart, contentCenter, mb1, textSecondary, fw400, fw600, card } from './styles.module.css';

// Функция определяющяя размеры экрана 
function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
      function updateSize() {
        setSize([window.innerWidth, window.innerHeight]);
      }
      window.addEventListener('resize', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
  }
  

const MyGamesData = [
    {
        date: new Date(2021, 7, 22),
        title: 'Классная игра'
    },
    {
        date: new Date(2021, 7, 8),
        title: 'Супер игра'
    },
    {
        date: new Date(2020, 9, 12),
        title: 'Трудная игра'
    },
    {
        date: new Date(2019, 4, 29),
        title: 'Умная игра'
    },
    {
        date: new Date(2017, 1, 1),
        title: 'Смешная игра'
    },
    {
        date: new Date(2016, 7, 13),
        title: 'Игра с очень длинным названием'
    },
    {
        date: new Date(2016, 11, 13),
        title: 'Развивающая игра'
    },
    {
        date: new Date(2001, 10, 10),
        title: 'Веселая игра'
    }]

export default function MyGames({ id, go, snack }) {
    const [width, height] = useWindowSize();

    const cardItems = MyGamesData.map((data) =>
        <Card className={[card, mb1].join(' ')} size="l" mode="outline">
            <div className={cardRowDir}>
                <div className={leftSideMygames}>
                    <Text className={fw600}>{data.title}</Text>
                    <Text className={[fw400, textSecondary].join(' ')}>Последний запуск {data.date.toLocaleDateString()}</Text>
                </div>
                <div className={rightSideMygames}>
                    <Button className={btnStart} size="s">Запустить</Button>
                </div>
            </div>
        </Card>
    );

    return (
        <Panel id={id}>
            <PanelHeader
                left={<PanelHeaderBack onClick={go} data-to="main" />}
            >
                Мои викторины {width} x {height}
            </PanelHeader>
            <Group className={contentCenter}>
                {cardItems}
            </Group>
            {snack}
        </Panel>
    );
};

MyGames.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    snack: PropTypes.element
};
