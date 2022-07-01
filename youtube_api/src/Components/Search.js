import React from 'react';

class Search extends React.Component{
    state={title:""}

    onSearchChanged = event => {
        const _title = event.target.value

        console.log(_title);

        this.setState({title: _title})

    }

    onSubmit = event => {
        event.preventDefault()

        console.log(this.setState.title);

        this.props.onSearch(this.state.title)
    }
    render(){
       return (
        <div>
            <form onSubmit={this.onSubmit}>
                <div class="form-controls">
                    <label> Search </label>
                    <input value={this.state.title} onChange={this.onSearchChanged} id="Video-search" type="text" placeholder='Enter Search Keyword'/>
                </div>
            </form>
        </div>
       )
    }
}

export default Search;