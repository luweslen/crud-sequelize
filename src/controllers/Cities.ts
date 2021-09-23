import { Context } from 'koa';
import { CityType } from '@/types/CityType';
import { City } from '@/models/City';
import { Country } from '@/models/Country';

class CityController {
  public static async create(ctx: Context):Promise<void> {
    const { name, state, countryId }: CityType = ctx.request.body;

    const createdCity = await City.create({
      name,
      state,
      countryId: Number(countryId),
    });

    ctx.status = 201;
    ctx.body = createdCity;
  }

  public static async update(ctx: Context):Promise<void> {
    const { id } = ctx.params;
    const { name, state, countryId } = ctx.request.body;

    const updatedCity = await City.update(
      {
        name,
        state,
        countryId,
      },
      {
        where: {
          id: Number(id),
        },
      },
    );

    ctx.body = updatedCity;
  }

  public static async delete(ctx: Context):Promise<void> {
    const { id } = ctx.params;

    const deletedCity = await City.destroy({
      where: {
        id: Number(id),
      },
    });

    ctx.body = deletedCity;
  }

  public static async getOne(ctx: Context):Promise<void> {
    const { id } = ctx.params;

    const countries = await City.findOne({
      where: {
        id: Number(id),
      },
      include: Country,
    });

    ctx.body = countries;
    ctx.status = countries ? 200 : 204;
  }

  public static async getAll(ctx: Context):Promise<void> {
    const countries = await City.findAll({ include: Country });

    ctx.body = countries;
    ctx.status = countries.length > 0 ? 200 : 204;
  }
}

export default CityController;
