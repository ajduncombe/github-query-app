import React from 'react'
import { UserSearchInput } from '../components/user-search-input'

const config = {
    title: 'App/Components/User Search Input',
    component: UserSearchInput,
}

function Template(args) {
    return <UserSearchInput {...args} />
}

const Default = Template.bind({})
Default.args = {
    onSubmit: (value) => console.log(value)
}

export default config
export { Default }