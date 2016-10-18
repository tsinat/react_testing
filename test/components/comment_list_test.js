import  { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(CommentList, null, { comments: ['new comment', 'other comment']});
    });

    it('shows li for each comment', () => {

    });

    it('shows each comment that is provided', () => {

    });
});
