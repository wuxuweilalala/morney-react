import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  font-size: 24px;
  > ul{
    display:flex;

    > li {
      width: 50%; 
      text-align:center;
      padding: 16px 0;
      position:relative;
      &.selected::after{
        content: '';
        display:block; 
        height: 3px;
        background:#333;
        position:absolute;
        bottom:0;
        width: 100%;
        left: 0;
      }
    }
  }
`;

type Props = {
    value:'-' | '+',
    onChange:(category:'-' | '+',)=>void
}
const CategorySection: React.FC<Props> = (props) => {
    const hashCategory = {
        '-': '支出', '+': '收入'
    };
    type keys = keyof typeof hashCategory;
    const [categoryList] = useState<keys[]>(['-', '+']);
    const selectedCategory = props.value
    return (
        <Wrapper>
            <ul>
                {
                    categoryList.map((item, index) => (
                        <li key={index} onClick={() => props.onChange(item)}
                            className={selectedCategory === item ? 'selected' : ''}>{hashCategory[item]}</li>
                    ))
                }
            </ul>
        </Wrapper>
    );
};

export default CategorySection;