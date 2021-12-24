import React from 'react'
import FallbackUI from './FallbackUI'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hasError: false, error: null }
    }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
    }

    render() {
        if (this.state.hasError) {
            return <FallbackUI error={this.state.error} />
        }
        return this.props.children
    }
}

export default ErrorBoundary
