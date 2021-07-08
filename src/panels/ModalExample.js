import React, { useState, useEffect } from 'react';
import { View, Panel, PanelHeader, Group, CellButton, ModalRoot, ModalPage, ModalPageHeader, FormItem, SelectMimicry, Radio, Checkbox, Input, DatePicker, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

const MODAL_PAGE_FILTERS = 'filters';

const Test = () => {
    const [activeModal, setActiveModal] = useState(null);

    useEffect(() => {
        console.log(activeModal);
    });

    const Modal = () => (
        <ModalRoot activeModal={activeModal}>
            <ModalPage
                id={MODAL_PAGE_FILTERS}
                header={<ModalPageHeader>Фильтры</ModalPageHeader>}
            >
                <Group>
                    <FormItem top="Город">
                        <SelectMimicry placeholder="Выбрать город" disabled />
                    </FormItem>

                    <FormItem top="Пол">
                        <Radio name="sex" value={0} defaultChecked>Любой</Radio>
                        <Radio name="sex" value={1}>Мужской</Radio>
                        <Radio name="sex" value={2}>Женский</Radio>
                    </FormItem>

                    <FormItem top="Школа">
                        <SelectMimicry placeholder="Выбрать школу" disabled />
                    </FormItem>
                    <FormItem top="Университет">
                        <SelectMimicry placeholder="Выбрать университет" disabled />
                    </FormItem>

                    <FormItem top="Дополнительно">
                        <Checkbox>С фотографией</Checkbox>
                        <Checkbox>Сейчас на сайте</Checkbox>
                    </FormItem>

                    <FormItem top="Работа">
                        <Input placeholder="Место работы" />
                    </FormItem>
                    <FormItem>
                        <Input placeholder="Должность" />
                    </FormItem>

                    <FormItem top="Дата рождения">
                        <DatePicker
                            min={{ day: 1, month: 1, year: 1901 }}
                            max={{ day: 1, month: 1, year: 2006 }}
                            dayPlaceholder="Д"
                            monthPlaceholder="ММ"
                            yearPlaceholder="ГГ"
                        />
                    </FormItem>
                </Group>
            </ModalPage>
        </ModalRoot>
    )

    return (
        <AdaptivityProvider>
            <AppRoot>
                <View activePanel="modals" modal={<Modal />}>
                    <Panel id="modals">
                        <PanelHeader>Модальные окна</PanelHeader>
                        <Group>
                            <CellButton onClick={() => setActiveModal(MODAL_PAGE_FILTERS)}>
                                Открыть модальную страницу
                            </CellButton>
                        </Group>
                    </Panel>
                </View>
            </AppRoot>
        </AdaptivityProvider>
    );
};
export default Test;