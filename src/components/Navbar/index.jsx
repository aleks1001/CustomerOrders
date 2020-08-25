import React from 'react';
import {Flex, Box, IconField, Input} from "pcln-design-system";
import styled from "styled-components";
import {Link, useLocation} from "react-router-dom";
import {Search} from "pcln-icons";
import {useDispatch} from "react-redux";
import {customerSearch} from "../../actions/customer";

const StyledLink = styled(Link)`
  float: left;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.colors.darkBlue};
    background-color: ${props => props.theme.colors.lightBlue};
  }
  color: white;
  font-size: 17px;
`

const Nav = ({history, ...rest}) => {
    const {pathname} = useLocation();
    const dispatcher = useDispatch();
    const handleSearch = (value) => {
        if (pathname === '/') {
            dispatcher(customerSearch(value));
        }
    }

    const placeholder = pathname === '/' ? 'Search by email' : 'Search templates'
    return (
        <Flex {...rest} justifyContent='space-between'>
            <Box width='75%'>
                <StyledLink to="/">Orders</StyledLink>
                <StyledLink to="/templates">Templates</StyledLink>
            </Box>
            <Box height='47px' bg='white' mr={2}>
                <IconField>
                    <Search color='primary' />
                    <Input
                        id='search'
                        onChange={(e) => handleSearch(e.target.value)}
                        placeholder={placeholder}
                    />
                </IconField>
            </Box>
        </Flex>
    )
}


export default styled(Nav)`
    background-color: ${props => props.theme.colors.darkBlue};
    overflow: hidden;
    margin: -8px -8px 10px -8px;
`