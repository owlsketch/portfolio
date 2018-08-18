function getNextProject (path, projects, direction) {
  const activeProject = path.slice(10)
  const activeIndex = projects.indexOf(activeProject)

  let linkedIndex = -1
  if (direction === 'left') {
    linkedIndex = activeIndex - 1
    if (linkedIndex < 0) linkedIndex = projects.length - 1
  } else {
    linkedIndex = activeIndex + 1
    if (linkedIndex > projects.length - 1) linkedIndex = 0
  }

  return `/projects/${projects[linkedIndex]}`
}

export { getNextProject }
