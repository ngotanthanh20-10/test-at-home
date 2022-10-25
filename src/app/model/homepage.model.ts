// HomepageWidget
export class HomepageWidget {
    section: SectionItem[] = []
    constructor(data: any) {
        this.section = data.map((value: any) => {
            return new SectionItem(value)
        });
    }

    addAttribute(data: any, index: number) {
        this.section.find((item) => {
            if (item.index === index) {
                item.addAttribute(data)
            }
        })
    }

    addWidgetSection(item: SectionItem | null) {
        // @TODO: add empty item
        if (!item) {

        }

    }

    parseFromApi(objet: any) {
        // return 
    }
    getDataToPostApi() { }

}

// SectionItem
export class SectionItem {
    code: string = "";
    index: number = -1;
    titleHeader: string = ""
    titles: TitleItem[] = []
    attributes: AttributeItem[] = []

    constructor(data: any) {
        this.code = data.code
        this.index = data.index
        this.titleHeader = data.titleHeader
        this.titles = data.titles.map((value: any) => {
            return new TitleItem(value)
        });
        this.attributes = data.attributes.map((value: any) => {
            return new AttributeItem(value)
        });
    }

    addAttribute(data: any) {
        this.attributes.push(data)
    }
}

// TitleItem
export class TitleItem {
    lang: string = "";
    title: string = "";

    constructor(data: any) {
        this.lang = data.lang;
        this.title = data.title
    }
}

// AttributeItem
export class AttributeItem {
    key: string = "";
    value: string = "";

    constructor(data: any) {
        this.key = data.key;
        this.value = data.value
    }
}