import React from 'react';

/**Deep Enzyme API */
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';
import Root from 'Root';


let wrapped;

beforeEach(() => {
    wrapped = mount(<Root><CommentBox/></Root>);
})

afterEach(()=>{
    wrapped.unmount();
})
it('has a text area and two buttons',()=>{
    // const wrapped = mount(<CommentBox />);

    // console.log(wrapped.find('textarea'));
    // console.log(wrapped.find('button'));

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

describe('the text area',()=>{

    beforeEach(()=>{
        wrapped.find('textarea').simulate('change',{
            target: {value: 'new comment'}
        });
    
        wrapped.update();
    })
    it('has a text area that users can type in ',()=>{
        
    
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });
    
    it('clears the textarea when input is submitted',()=>{
        
    
        wrapped.find('form').simulate('submit');
    
        wrapped.update();
    
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    })
})


