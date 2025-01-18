interface NavigationTabProps {
    name: string;
    id: number;
    tab: number;
    setter: (id:number) => void;
}

interface NavigationBarProps {
    names: string[];
    tab: number;
    setter: (id:number) => void;
}

function NavigationTab({name, id, tab, setter}: NavigationTabProps) {
    let isSelected = id == tab;
    let buttonType = isSelected ? "btn neumorphic neumorphic-disabled" : "btn neumorphic neumorphic-enabled"
    return (
        <button className={buttonType} onClick={() => setter(id)}>
            {name}
        </button>
    )
}

function NavigationBar({names, tab, setter}: NavigationBarProps) {
    return (
        <ul>
            {names.map((name, index) => (
                <NavigationTab
                    name={name}
                    id={index}
                    tab={tab}
                    setter={setter}
                />
            ))}
        </ul>
    )
}

export default NavigationBar