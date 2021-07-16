// Внешние зависимости
import React from 'react';
import { Group, CellButton, ModalRoot, ModalPage, ModalPageHeader, FormItem, Input, PanelHeaderClose, Spacing, Avatar, Button } from '@vkontakte/vkui';
import { Icon28AddOutline } from '@vkontakte/icons';
import { useSelector, useDispatch } from 'react-redux';

// Мои компоненты
import { footer, sferumColor, btnCreate, input } from './modal.module.css';

// Slice
import { setShowedModal } from '../slices/modalSlice';

export default function Modal () {
    const dispatch = useDispatch();
    const activeModal = useSelector((state) => state.modal.showedModal);

    const handleCloseModal = () => dispatch(setShowedModal(null))

    return (
        <ModalRoot activeModal={activeModal} onClose={handleCloseModal}>
            <ModalPage
                id={'createQuiz'}
                header={
                    <div>
                        <ModalPageHeader
                            left={<PanelHeaderClose className={sferumColor} onClick={handleCloseModal} />}
                            separator={true}
                        >
                            Cоздание викторины
                        </ModalPageHeader>
                        <Spacing separator />
                    </div>
                }
            >
                <Group>
                    <FormItem top="Название викторины">
                        <input className={input} type="text" />
                    </FormItem>
                    <FormItem top="Обложка">
                        <CellButton className={sferumColor} before={
                            <Avatar
                                shadow={false}
                                size={72}
                                mode="image"
                            >
                                <Icon28AddOutline className={sferumColor} />
                            </Avatar>
                        }>
                            Добавить картинку
                        </CellButton>
                    </FormItem>
                </Group>
                <Spacing separator />
                <div className={footer}>
                        <Button size="m" className={btnCreate}> Создать </Button>
                </div>
            </ModalPage>
        </ModalRoot>
    );
};