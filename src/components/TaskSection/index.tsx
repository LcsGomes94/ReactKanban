import { TaskSectionBody, TaskSectionContainer, TaskSectionHeader } from "./styles";

interface ITaskSectionProps {
    sectionLabel: string
    sectionType: string
    children?: React.ReactNode
}

export function TaskSection ({ sectionLabel, sectionType, children }: ITaskSectionProps) {
    return (
        <TaskSectionContainer>
            <TaskSectionHeader className={sectionType}>
                <h2>{sectionLabel}</h2>
            </TaskSectionHeader>
            <TaskSectionBody className={sectionType}>
                {children}
            </TaskSectionBody>
        </TaskSectionContainer>
    )
}