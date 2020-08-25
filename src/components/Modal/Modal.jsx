import React from 'react'
import ReactDOM from 'react-dom'
import {Box, CloseButton} from "pcln-design-system";
import styled from "styled-components";
import {ThemeProvider} from 'pcln-design-system'
import {useDispatch, useSelector} from "react-redux";
import {selectModalTemplate} from "../../selectors/modal";
import Overlay from "./Overlay";
import Header from "../atoms/Header";
import {closeModal} from "../../actions/modal";

const Modal = React.memo(({
                              children,
                              onAction,
                              closeModal,
                              title,
                              renderBody,
                              renderFooter,
                              ...rest
                          }) => {
    const domEl = document.getElementById('modal-root')
    if (!domEl) return null

    // This is where the magic happens -> our modal div will be rendered into our 'modal-root' div, no matter where we
    // use this component inside our React tree
    return ReactDOM.createPortal(
        <ThemeProvider>
            <Overlay>
                <Box {...rest}>
                    <Header p={2} justifyContent='space-between' color='primary'>
                        <Box>{title}</Box>
                        <CloseButton onClick={closeModal}/>
                    </Header>
                    {renderBody && renderBody()}
                    {renderFooter && renderFooter()}
                </Box>
            </Overlay>
        </ThemeProvider>,
        domEl
    )
})

const StyledModal = styled(Modal)`
    border-radius: 4px;
    background-color: white;
    z-index: 99;
    position: relative;
    width: 100%;
    max-width: 420px;
    max-height: 100%;
    margin: 0 auto;
`

export default () => {
    const isModalOpen = useSelector(state => state.modal.isOpen);
    const plate = useSelector(selectModalTemplate)
    const dispatcher = useDispatch();
    const handleClose = () => {
        dispatcher(closeModal());
    }
    return (
        <>
            {isModalOpen &&
            <StyledModal
                title={plate.title}
                closeModal={handleClose}
                renderBody={plate.body}
                renderFooter={plate.footer}
            />}
        </>
    )
}