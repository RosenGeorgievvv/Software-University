class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length >= this.space) {
            throw new Error("Not enough space in the cellar.");
        }
        this.wines.push({
            wineName,
            wineType,
            price,
            paid: false
        });
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }








    
    payWineBottle(wineName, price) {
        const wine = this.findWineByName(wineName);
        if (!wine) {
            throw new Error(`${wineName} is not in the cellar.`);
        }
        if (wine.paid) {
            throw new Error(`${wineName} has already been paid.`);
        }
        wine.paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        const wine = this.findWineByName(wineName);
        if (!wine) {
            throw new Error(`The wine, you're looking for, is not found.`);
        }
        if (!wine.paid) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }
        this.wines = this.wines.filter(w => w !== wine);
        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        if (!wineType) {
            const emptySlots = this.space - this.wines.length;
            let cellarInfo = `You have space for ${emptySlots} bottles more.\n`;
            cellarInfo += `You paid ${this.bill}$ for the wine.\n`;
            this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            cellarInfo += this.wines.map(wine => `${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`).join('\n');
            return cellarInfo;
        } else {
            const winesOfType = this.wines.filter(wine => wine.wineType === wineType);
            if (winesOfType.length === 0) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            }
            winesOfType.sort((a, b) => a.wineName.localeCompare(b.wineName));
            return winesOfType.map(wine => `${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`).join('\n');
        }
    }

    findWineByName(wineName) {
        return this.wines.find(wine => wine.wineName === wineName);
    }
}