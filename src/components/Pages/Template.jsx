import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteTemplate, editTemplate, getTemplates, selectTemplate} from "../../actions/template";
import {Flex, Box} from "pcln-design-system";
import {openModal} from "../../actions/modal";
import Panel from "../atoms/Panel";
import TemplateContainer from '../atoms/Container'
import TemplateRow from "../Template/TemplateRow";
import {selectIsTemplateSelected, selectSelectedTemplate, selectTemplates} from "../../selectors/template";
import Select from '../atoms/Select';
import {selectSelectedCustomer} from "../../selectors/customer";

const LeftSide = (props) => {
    const dispatcher = useDispatch();
    const templates = useSelector(selectTemplates);

    const handleEdit = (id) => {
        dispatcher(editTemplate(id));
        dispatcher(openModal('editTemplate'));
    }
    const handleAdd = () => {
        dispatcher(openModal('addTemplate'));
    }

    const handleDelete = (id) => {
        dispatcher(deleteTemplate(id));
    }

    const handleSelect = id => {
        dispatcher(selectTemplate(id));
    }

    const renderTemplates = () => templates.map((t) =>
        <TemplateRow
            onClick={() => handleSelect(t.id)}
            onDelete={() => handleDelete(t.id)}
            onEdit={() => handleEdit(t.id)}
            key={t.id}
            {...t}
        />)

    return (
        <Panel {...props} count={templates.length} onAdd={handleAdd}>
            {renderTemplates()}
        </Panel>
    )
}

const RightSide = (props) => {
    return (
        <Panel {...props} count={0}>
            <Select/>
        </Panel>
    )
}

const Center = (props) => {
    const template = useSelector(selectSelectedTemplate)
    const customer = useSelector(selectSelectedCustomer)
    return template && customer ? (
        <Panel {...props} text={`${template.name}`}>
            <Box p={2}>
                <TemplateContainer
                    data={customer}
                    content={template.content}
                />
            </Box>
        </Panel>
    ) : null
}

const TemplatePage = () => {
    const dispatcher = useDispatch();
    const templates = useSelector(selectTemplates)
    const isTemplateSelected = useSelector(selectIsTemplateSelected)

    useEffect(() => {
        dispatcher(getTemplates());
    }, [])
    return (
        <>
            <Flex>
                {templates && templates.length > 0 && (
                    <LeftSide style={{height: 'max-content'}} text='Templates' width={isTemplateSelected ? 1 / 2 : 1}/>
                )}
                {isTemplateSelected &&
                <RightSide style={{height: 'max-content'}} text='Customers' width={1 / 2} ml={2}/>}
            </Flex>
            <Center mt={5} text='Render Template'/>
        </>
    )
}

export default TemplatePage;