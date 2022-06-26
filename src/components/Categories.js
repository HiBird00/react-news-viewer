import React from 'react';
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { css } from "styled-components";

const categories = [
    {
        name: 'all',
        text: '전체보기'
    },
    {
        name: 'business',
        text: '비즈니스'
    },
    {
        name: 'entertainment',
        text: '엔터테인먼트'
    },
    {
        name: 'health',
        text: '건강'
    },
    {
        name: 'science',
        text: '과학'
    },
    {
        name: 'sports',
        text: '스포츠'
    },
    {
        name: 'technology',
        text: '기술'
    },
]

const CategoriesBlock = styled.div`
    display: flex;
    padding :1rem;
    margin : 0 auto;
    width : 768px;
    @media screen and (max-width : 767px) {
        width : 100%;
        overflow-x :auto;
    }
`;

const Category = styled(NavLink)`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    padding-bottom: 0.25rem;
    color : inherit;

    &:hover {
        color : #495057;
    }

    &.active {
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color : #22b8cf;
        &:hover {
            color : #3bc9db;
        }
    }

    & + & {
        margin-left : 1rem;
    }
`;

const Categories = () => {
    return (
        <CategoriesBlock>
            {categories.map(c => (
                <Category
                    key={c.name}
                    className={({ isActive }) => (isActive ? 'active' : undefined)}
                    to={c.name === 'all' ? '/' : `/${c.name}`}
                >
                    {c.text}
                </Category>
            ))}
        </CategoriesBlock>
    );
};

export default Categories;