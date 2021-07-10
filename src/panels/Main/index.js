import { React, useRef, useState, createRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Icon24Chevron, Icon24Add } from '@vkontakte/icons';
import { Panel, PanelHeader, Card, Text, Input, Button, Counter, Spacing } from '@vkontakte/vkui';

import './index.css';
import Logo from '../../img/logo';

var codeFieldNumbers = [0, 1, 2, 3, 4, 5];
var codeFieldValue = {}
for (let i = 0; i < 6; i++) 
    codeFieldValue['codeField' + i] = ''

const Main = ({ id, go, snack }) => {
    const [isBtnGoDis, setBtnGoDis] = useState(true);
    const [inputs, setInputs] = useState({ ...codeFieldValue });
    const inputRef = useRef(codeFieldNumbers.map(() => createRef()));

    const handleChange = e => {
        let value = e.target.value.substring(0, 1)
        let target = e.target.name
        let num = Number.parseInt(target.slice(-1))
        let isPressedNum = ((value.charCodeAt(0) > 47) & (value.charCodeAt(0) <= 57))? true : false
        let isPressedDel = (inputs[target].length > value.length) ? true : false

        // Проверка что символ в value input`а, это число
        if (isPressedNum || isPressedDel) {
            setInputs({ ...inputs, [target]: value })
            if ((num < 5) & (isPressedNum)) 
                num += 1 
        }

        // Устанавливаем фокус на элемент
        inputRef.current[num].current.focus();
        
    };

    useEffect(() => {
        // Проверка, на заполненость всех полей, чтобы кнопка разблокировалась
        let howManyFilled = 0

        for (let key in inputs) {
            if (inputs[key]!= '')
                howManyFilled += 1
        }

        setBtnGoDis(!(howManyFilled == 6))

      });

    const inputArr = codeFieldNumbers.map(n =>
        <input
            className="input"
            key={n}
            name={'codeField' + n}
            type="text"
            onChange={handleChange}
            value={inputs['codeField' + n]}
            ref={inputRef.current[n]}
        />
    );

    return (
        <Panel id={id}>
            <PanelHeader>
                Enigma
            </PanelHeader>
            <div className="content-center transparent-background"><Logo /></div>
            <Card className="content-center transparent-background" style={{ padding: '1em' }}>
                <Text className="content-center mb1 text-center" weight="regular">Если у вас есть код для присоединения к игре,<br /> введите его сюда</Text>
                <div className="content-center mb1" style={{ justifyContent: 'space-around' }}>
                    {inputArr}
                </div>
                <div className="content-center">
                    <Button className="btn-connect w25" size="l" disabled={isBtnGoDis}>Присоединиться к викторине</Button>
                </div>
            </Card>
            <Card className="content-center transparent-background" style={{ marginTop: '3em' }}>
                <Button
                    className="btn-gallery w25"
                    size="l"
                    after={
                        <div style={{ display: 'flex' }}>
                            <Counter style={{ marginRight: '.5em', backgroundColor: '#4B47B2', color: 'white' }}>3</Counter>
                            <Icon24Chevron />
                        </div>
                    }
                    onClick={go}
                    data-to="mygames"
                >
                    Мои викторины
                </Button>
                <Spacing />
                <Button
                    className="btn-create w25"
                    size="l"
                    before={<Icon24Add />}
                    after={<Icon24Chevron />}
                >
                    Создать викторину
                </Button>
            </Card>
            {snack}
        </Panel>
    )
};

Main.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
    snack: PropTypes.element
};

export default Main;
