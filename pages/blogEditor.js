import React from 'react';
import Link from 'next/link'
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import { SlateEditor } from '../components/BlogEditorSlate/slateEditor';
import withAuth from '../components/hoc/withAuth';

const BlogEditor = props =>{
    return(
        <BaseLayout {...props.auth}>
            <BasePage className="blog-editor-page" title="Create New Blog">
                <SlateEditor/>
            </BasePage>
        </BaseLayout>
    )
}
export default withAuth(BlogEditor,'siteOwner');