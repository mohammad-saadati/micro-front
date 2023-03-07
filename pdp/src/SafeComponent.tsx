import React from "react";

export default class SafeComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  static componentDidCatch() {}

  render() {
    if(this.state.hasError) {
      return <div>app is broken</div>
    } 
    return this.props.children
  }
}
