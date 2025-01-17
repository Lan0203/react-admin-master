import React,{Component} from 'react';
import {Button,Card,Modal} from 'antd';
import {Editor} from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftjs from 'draftjs-to-html'

export default class Rich extends Component{
    state = {
        showRichText:false,
        editorContent: '',
        editorState: '',
    };

    handleClearContent = ()=>{
        this.setState({
            editorState:''
        })
    }

    handleGetText = ()=>{
        this.setState({
            showRichText:true
        })

    }
    onEditorChange= (editorContent)=>{
        this.setState({
            editorContent
        })
    }
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState
        });
    }
    render(){
        const { editorState } = this.state;
        return(
            <div>
                <Card>
                    <Button type="primary" onClick={this.handleClearContent}>清空内容</Button>
                    <Button type="primary" onClick={this.handleGetText} style={{marginLeft:10}}>获取HTML文本</Button>
                </Card>
                <Card title="富文本编辑器">
                    <Editor
                        editorState={editorState}
                        onContentStateChange={this.onEditorChange}
                        onEditorStateChange={this.onEditorStateChange}
                    />
                </Card>
                <Modal
                    title="富文本"
                    visible={this.state.showRichText}
                    onCancel={()=>{
                        this.setState({
                            showRichText:false
                        })
                    }}
                    footer={null}
                >
                    {draftjs(this.state.editorContent)}
                </Modal>
            </div>
        )
    }
}